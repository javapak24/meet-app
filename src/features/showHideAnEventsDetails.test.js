import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import mockData, { getEvents } from '../mock-data';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        given('the user opened the app', () => {
          AppComponent = render(<App />);
        });

        when('the list of events are rendered', async () => {
          const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });
      
        });

        then('event details should not show', async () => {
            
          });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {

      given('the user is seeing the events rendered', () => {

      });

      when('the user clicks the show details button', () => {
      });

      then('the event details should be shown',async () => {
          
        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {

      given('the user has clicked the show details button', () => {

      });

      when('the user clicks the hide details button', () => {
      });

      then('the event details should be hidden',async () => {
        
      });
    });

});