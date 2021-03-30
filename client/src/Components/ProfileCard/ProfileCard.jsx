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
    margin-top: 16px;
    display: flex;
    align-items: flex-end;
    padding-left: 16px;
    background-image: url(${userData.photo});
 `
  return (
    <Card>
      <CardTitle>{userData.name}, 25</CardTitle>
    </Card>
  );
}

export default ProfileCard;