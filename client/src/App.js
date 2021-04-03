import './App.css';
import Navigation from './Components/Navigation/Navigation'
import ProfileCard from './Components/ProfileCard/ProfileCard'
import ActionButtons from './Components/ActionButtons/ActionButtons'
import { useEffect, useState } from 'react'
import styled from "styled-components"

const AppMain = styled.main`
  background-color: white;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: var(--GreyText);
`

const App = () => {

  const [user, setUser] = useState([{}])


  const getUser = async () => {
    try {
        const response = await fetch("http://localhost:5000/user")
        const jsonData = await response.json()
        setUser(jsonData)
        
    } catch (err) {
        console.error(err)
    }
  } 

  const handleClick = () => {
    getUser()
  }



  return (
    <div className="App">
      <AppMain>
        <Navigation />
         {!user? <p>Loading</p> : <ProfileCard userData={user[0]}/> }
        <ActionButtons id={user[0].id} click={handleClick}/>
      </AppMain>
    </div>
  );
}

export default App;
