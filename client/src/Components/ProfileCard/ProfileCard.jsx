import { useEffect, useState } from 'react';
import '../../App.css';
import styled from "styled-components"

const ProfileCard = () => {
  const [data, setData] = useState({})

  const getData = async () => {
    try {
        const response = await fetch("http://localhost:5000/users/14")
        const jsonData = await response.json()
        setData(jsonData)
        // console.log(jsonData[0].photo)
    } catch (err) {
        console.error(err)
    }
  } 

  useEffect(() => {
    getData()
  }, [])
  console.log(data)
 
 const Card = styled.div`
    background-color: var(--PastelRed);
    width: 100%;
    height: 350px;
    margin-top: 16px;
    display: flex;
    align-items: flex-end;
    padding-left: 16px;
    
 `
 

  return (
    <Card>
      <h2 className="user-name">Name, 25</h2>
    </Card>
  );
}

export default ProfileCard;