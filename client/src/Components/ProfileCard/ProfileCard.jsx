import styled from "styled-components"

const ProfileCard = ({userData}) => {
 
 const Card = styled.div`
    background-color: var(--PastelRed);
    color: var(--white);
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
      <h2>{userData.name}, 25</h2>
    </Card>
  );
}

export default ProfileCard;