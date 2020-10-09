import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [theCharacters, setTheCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setTheCharacters(res.data.results)
      })
  }, [])

  const characterBox = theCharacters.map(char => { 
    return (  
      <Character aCharacter={char} />
    )
  })
  

  return (
    <div>
      {characterBox}
    </div>
    
  );
}

export default App;
