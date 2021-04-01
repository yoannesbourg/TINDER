import '../../App.css'
import styled from "styled-components"
import { BsHeartFill } from "react-icons/bs"
import { BsStarFill } from "react-icons/bs"
import { HiX } from "react-icons/hi"
import { useState } from 'react'
// import { updateUser } from '../updateUser'



const ActionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const ActionButton = styled.button`
 border: none;
 width: 60px;
 height: 60px;
 margin: 32px 0;
 border-radius: 50%;
 font-size: 25px;
 display: flex;
 justify-content: center;
 align-items: center;
 box-shadow: 0 0 6px 2px #a0a0a0;
 outline: none;
 transition: ease-in-out .2s;

 &:hover {
  opacity: .8;
 }
 &:active {
transform: scale(.9);
 }
`

const Dislike = styled(ActionButton)`
  font-weight: bold;
`

const Superlike = styled(ActionButton)`
  width: 50px;
  height: 50px;
  margin-right: 16px;
  margin-left: 16px;
`

const Like = styled(ActionButton)``


const ActionButtons = ({id}) => {

  const [description, setDescription] = useState('its matched')

  const updateUser = async (e) => {
    e.preventDefault()
    try {
      
      const body = { description }
      const response = await fetch(`http://localhost:5000/users/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)        
      })
      console.log(response)
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <ActionContainer>
      <Dislike>
        <HiX/>
      </Dislike>
      
      <Superlike>
        <BsStarFill/>
      </Superlike>
      
      <Like onClick={(e)=> {
        updateUser(e)
      }}>
        <BsHeartFill/>
      </Like>
    </ActionContainer>
  );
}

export default ActionButtons;