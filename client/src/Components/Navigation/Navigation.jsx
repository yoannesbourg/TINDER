import '../../App.css';
import { AiOutlineUser } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import styled from "styled-components"

const NavigationBlock = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
margin-top: 16px;
`


const Navigation = () => {
  return (
    <NavigationBlock>
      <AiOutlineUser />
      <AiFillFire />
      <AiFillMessage />
    </NavigationBlock>
  );
}

export default Navigation;