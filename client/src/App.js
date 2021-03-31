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

  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [ids, addId] = useState([])

  

  const randomIndex = () => Math.floor(Math.random() * ids.length)

  const getAllIds = async () => {
    try {
        const response = await fetch("http://localhost:5000/ids")
        const jsonData = await response.json()  
        jsonData.map(item => addId(prev => [...prev, item.id]))
    } catch (err) {
      console.error(err)
    }
  }

  const getData = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/users/${id}`)
        const jsonData = await response.json()
        
        setUser(jsonData)
        setIsLoading(true)

    } catch (err) {
        console.error(err)
    }
  } 

  const randomId = () => {
    getData(ids[randomIndex()])
  }

  useEffect(() => {
    getAllIds()
   
    getData(ids[randomIndex()])
    
  }, []) 
  console.log(user)
  return (
    <div className="App">
      <AppMain>
        <Navigation />
        

        {user? <p>{user}</p> : <p>Loading</p>}

        {/* {!isLoading? <p>Loading</p> : <ProfileCard userData={user[0]}/>} */}


        <ActionButtons />
      </AppMain>
    </div>
  );
}

export default App;
