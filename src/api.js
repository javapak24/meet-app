import mockData from './mock-data';
import NProgress from "nprogress";

/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

const checkToken = async (accessToken) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  );
  const result = await response.json();
  return result;
};


export const getAccessToken = async () => {             
  const accessToken = localStorage.getItem("access_token");
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) {
      const response = await fetch(
        "https://ednvy55cy9.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
      );
      const result = await response.json();
      const { authUrl } = result;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

const getToken = async (code) => {
  try {
    const encodeCode = encodeURIComponent(code);
 
    const url = "https://ednvy55cy9.execute-api.eu-central-1.amazonaws.com/dev/api/token";
    // eslint-disable-next-line no-useless-concat

    const getUrl = `${url}` + "/" + `${encodeCode}`;
    const response = await fetch(getUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const { access_token } = await response.json();
    access_token && localStorage.setItem("access_token", access_token);
    return access_token;
  } catch (error) {
    return error;
  }
}; 


export const getEvents = async () => {
  NProgress.start();
  if (window.location.href.startsWith("http://localhost")) {
    NProgress.done();
    return mockData;
  }

  if (!navigator.onLine) {
    const events = localStorage.getItem("lastEvents");
    NProgress.done();
    return events?JSON.parse(events):[];
  }






/////look here for problem august 19th


  const token = await getAccessToken();
  const url =  "https://ednvy55cy9.execute-api.eu-central-1.amazonaws.com/dev/api/get-events";

  if (token) {
    // removeQuery();
    const eventsURL = url + "/" + token;
    const response = await fetch(eventsURL)
      .then((response) => response.json())
      .then((data) => {
        if (!data) return [];
        localStorage.setItem("lastEvents", JSON.stringify(data));
        //access data directly instead not data.events
        const result = data;
        NProgress.done();
        return result;
      }
    ).catch((error) => {
      if (error) {
        NProgress.done();
        throw new Error(`HTTP error! status: ${error.status}`);
      }
      console.log(error);
    });
    
    return response;
  }
};

/**
 *
 * This function will fetch the list of all events
 */
