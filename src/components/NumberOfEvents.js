import React, { useState } from 'react'

export default function NumberOfEvents({currentNOE , setCurrentNOE, setErrorAlert}) {
  const [error, setError] = useState('');
  const handleInputChanged = (event) => {
    const value = event.target.value;

    if (isNaN(value) || value < 0){
      setError('Invalid numbers')
    }
    else {
      setError("")
    }
    setErrorAlert(error);
    setCurrentNOE(value);
  }
  return (
    <div>
 <input type="text" role='input' onChange={handleInputChanged}></input>
    </div>
  )
}
