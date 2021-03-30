import './App.css';
import Navigation from './Components/Navigation/Navigation'
import ProfileCard from './Components/ProfileCard/ProfileCard'
import ActionButtons from './Components/ActionButtons/ActionButtons'
import { useEffect, useState } from 'react';
const App = () => {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    try {
        const response = await fetch("http://localhost:5000/users/14")
        const jsonData = await response.json()
        setUser(jsonData)
        setIsLoading(true)
    } catch (err) {
        console.error(err)
    }
  } 

  useEffect(() => {
    getData()
  }, [])
  console.log(user)

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />

        {!isLoading? <p>Loading</p> : <ProfileCard userData={user[0]}/>}
        
        <ActionButtons />
      </header>
    </div>
  );
}

export default App;
