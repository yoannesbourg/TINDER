import '../../App.css'
import styled from "styled-components"
import { BsHeartFill } from "react-icons/bs"
import { BsStarFill } from "react-icons/bs"
import { HiX } from "react-icons/hi"
import { useEffect, useState } from 'react'
import {ActionContainer, ActionButton, Dislike, Superlike, Like} from '../Styled-Components/StyledComponents'

const ActionButtons = ({id, click, handleMatch}) => {

  const [likedYou, setLikedYou] = useState()

  const updateUser = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:5000/users/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"}    
      })

    } catch (err) {
      console.error(err.message)
    }
  }

  const getMatch = async () => {
    try {
        const response = await fetch(`http://localhost:5000/liked/${id}`)
        const jsonData = await response.json()
        setLikedYou(jsonData)
    } catch (err) {
        console.error(err)
    }
  }

  const handleLike = () => {
    handleMatch(likedYou)
  }

  useEffect(() => {
    getMatch()
  },[])
  

  return (
  <div>
    <ActionContainer>
      <Dislike onClick={(e)=> {
        click()
        updateUser(e)
      }}>
        <HiX/>
      </Dislike>
      
      <Superlike>
        <BsStarFill/>
      </Superlike>
      
      <Like onClick={(e) => {
        handleLike()
        console.log(likedYou)
      }}>
        <BsHeartFill/>
      </Like>
     </ActionContainer> 
  </div>
  )
}

export default ActionButtons

