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

const ProfileCard = ({userData, matched, click}) => {

 const MatchedCard = styled.div`
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
    position: relative;

    &:before {
      background-color: black;
      content: "";
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      opacity: 0.75;
      z-index: 1;
      border-radius: 20px;
    }
 `

 const MatchedThumbnail = styled.div`
    background-image: url(${userData.photo});
    background-size:cover;
    background-position: center;
    width: 100px;
    height: 100px;
    position: absolute;
    z-index: 1;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
 `
  const MatchText = styled.div`
    color: white;
    z-index: 1;
    text-align: center;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Dancing Script', cursive;
    font-size: 35px;
  `

  const ContinueSwiping = styled.button`
    border: none;

    margin: 32px 0;
    border-radius: 8px;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    outline: none;
    transition: ease-in-out .2s;
    z-index: 1;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: 'Dancing Script', cursive;
    cursor: pointer;

    &:hover {
    opacity: .8;
    }
  `

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
  (<Loader>
    <RiLoader5Line/>
  </Loader>)
  :
  matched? (
    <MatchedCard>
    <MatchedThumbnail></MatchedThumbnail>
    <MatchText>It's a match!</MatchText>
    <ContinueSwiping onClick={click}>Continue</ContinueSwiping>
  </MatchedCard>  
  ) : 
  (<Card>
    <CardTitle>{userData.name}, 25</CardTitle>
    </Card> )
}  
    </>
  )
}

export default ProfileCard

