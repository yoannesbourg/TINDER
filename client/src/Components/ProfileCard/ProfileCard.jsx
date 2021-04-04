import styled, { keyframes } from "styled-components"
import { RiLoader5Line } from "react-icons/ri"

const CardTitle = styled.h2`
  color: var(--white);
  text-shadow: 2px 2px 2px #5e5e5e;
`

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);  
  }
`

const Loader = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${loading} infinite .5s linear;
`

const ProfileCard = ({userData}) => {

 const Card = styled.div`
    width: 100%;
    height: 350px;
    margin-top: 32px;
    display: flex;
    align-items: flex-end;
    padding-left: 16px;
    background-image: url(${userData.photo});
    background-size:cover;
    background-position: center;
    box-shadow: 0 0 6px 2px #a0a0a0;
    border-radius: 20px;
 `

  return (
    <>
      {!userData.name?
        <Loader>
          <RiLoader5Line/>
        </Loader>
        :
        <Card>
          <CardTitle>{userData.name}, 25</CardTitle>
        </Card>  
      }       
    </>

  )
}

export default ProfileCard


