import styled from "styled-components"

const CardTitle = styled.h2`
  color: var(--white);
  text-shadow: 2px 2px 2px #5e5e5e;
`

const ProfileCard = ({userData}) => {
 const Card = styled.div`
    background-color: var(--PastelRed);
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
    <Card>
      <CardTitle>{userData.name}, 25</CardTitle>
    </Card> 
  );
}

export default ProfileCard;