import styled, { keyframes } from "styled-components"
import { RiLoader5Line } from "react-icons/ri"
import { MatchText, ContinueSwiping } from '../Styled-Components/StyledComponents'

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

  const handleClick = () => {
    click()
  }

  return (
    <>
  {!userData.name?
  (<Loader>
    <RiLoader5Line/>
  </Loader>)
  :
[  matched? (
    <MatchedCard>
    <MatchedThumbnail></MatchedThumbnail>
    <MatchText>It's a match!</MatchText>
    <ContinueSwiping onClick={handleClick}>Continue</ContinueSwiping>
  </MatchedCard>  
  ) : 
  (<Card>
    <CardTitle>{userData.name}, 25</CardTitle>
    </Card> )]
}  
    </>
  )
}

export default ProfileCard

