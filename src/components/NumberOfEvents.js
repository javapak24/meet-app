import React from 'react'

export default function NumberOfEvents({currentNOE , setCurrentNOE}) {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
  }
  return (
    <div>
 <input type="text" role='input' onChange={handleInputChanged}></input>
    </div>
  )
}
