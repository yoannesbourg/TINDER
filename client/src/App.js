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

  const [ids, addId] = useState([])  
  
  const getUsersIds = async () => {
    try {
      const response = await fetch("http://localhost:5000/ids")
      const jsonData = await response.json()  
      jsonData.map(item => addId(prev => [...prev, item.id]))
  } catch (err) {
    console.error(err)
  }
  }
  
  

  const getUserData = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/users/${id}`)
        const jsonData = await response.json()
        return jsonData
    } catch (err) {
        console.error(err)
    }
  }


  useEffect(() => {
    getUsersIds()
  }, []) 

  return (
    <div className="App">
      <AppMain>
        <Navigation />
         {getUserData(ids[randomIndex()])}
        <ActionButtons />
      </AppMain>
    </div>
  );
}

export default App;
