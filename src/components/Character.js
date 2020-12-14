import React from 'react'
import styled from 'styled-components'

const CharacterStyles = styled.div`
  text-align: center;
  background-color: ${pr => pr.theme.backgroundColor};
  color: ${pr => pr.theme.primaryColor};
  box-shadow: ${pr => pr.theme.boxShadow};
  border-radius: 10px;
  padding: 1% 7%;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;
  margin-bottom: 1%;
  h1 {
    cursor: pointer;
    text-decoration: underline;
  }
  .details {
    display: none;
  }
`

function handleClick(e){
  let id = e.target.textContent.split(" ")[0]
  const clickedchar = document.querySelector(`.${id} .details`)
  if(clickedchar.style.display === 'none') {
    clickedchar.style.display = 'block'
  } else {
    clickedchar.style.display = 'none'
  }
}


function Character(props) {
  let theId = props.aCharacter.name.split(" ")[0]
  return (
    <CharacterStyles className={theId}>
      <div>
        <h1><span onClick={handleClick}>{props.aCharacter.name}</span></h1>
        <div className="details" style={{display: "none"}}>
          <p>Birth Year: {props.aCharacter.birth_year}</p>
          <p>Gender: {props.aCharacter.gender}</p>
          <p>Hair Color: {props.aCharacter.hair_color}</p>
          <p>Starships: {props.aCharacter.starships.length}</p>
        </div>
      </div>
    </CharacterStyles>
  )
}

export default Character