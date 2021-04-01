import styled from "styled-components"
import { RiLoader5Line } from "react-icons/ri"

const CardTitle = styled.h2`
  color: var(--white);
  text-shadow: 2px 2px 2px #5e5e5e;
`

const Loader = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
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
      {!userData?
      <Loader>
        <div className='loader'><RiLoader5Line/></div>
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


  