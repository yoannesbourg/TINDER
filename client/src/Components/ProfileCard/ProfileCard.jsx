import { useEffect, useState } from 'react';
import '../../App.css';

const ProfileCard = () => {
  const [data, setData] = useState({})

  const getData = async () => {
    try {
        const response = await fetch("http://localhost:5000/users/14")
        const jsonData = await response.json()
        setData(jsonData)
        console.log(jsonData)
    } catch (err) {
        console.error(err)
    }
}

 useEffect(() => {
   getData()
 }, [])

  return (
    <div className="profile-card">
      <h2 className="user-name">Name, 25</h2>
    </div>
  );
}

export default ProfileCard;