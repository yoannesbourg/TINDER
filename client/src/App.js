import './App.css';
import Navigation from './Components/Navigation/Navigation'
import ProfileCard from './Components/ProfileCard/ProfileCard'
import ActionButtons from './Components/ActionButtons/ActionButtons'
import { useState } from 'react'
import styled from "styled-components"
import { AppMain, NoMoreUsers } from './Components/Styled-Components/StyledComponents'

const App = () => {

  const [user, setUser] = useState([{}])
  const [matched, match] = useState(false)


  const getUser = async () => {
    try {
        const response = await fetch("http://localhost:5000/user")
        const jsonData = await response.json()
        setUser(jsonData)
        
    } catch (err) {
        console.error(err)
    }
  } 

  const handleMatch = state => {
    match(state)


    
  }

  const handleClick = () => {
    getUser()
  }
 
  return (
    <div className="App">
      <AppMain>
        <Navigation />
         {!user[0].name? <NoMoreUsers><p>No more users to swipe</p></NoMoreUsers> : <ProfileCard userData={user[0]} matched={matched} handleMatch={handleMatch} click={handleClick}/>}
        <ActionButtons id={user[0].id} click={handleClick} handleMatch={handleMatch}/>
      </AppMain>
    </div>
  )
}

export default App;
