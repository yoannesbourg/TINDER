import styled from "styled-components"

export const ActionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const ActionButton = styled.button`
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

export const Dislike = styled(ActionButton)`
  font-weight: bold;
`

export const Superlike = styled(ActionButton)`
  width: 50px;
  height: 50px;
  margin-right: 16px;
  margin-left: 16px;
`

export const Like = styled(ActionButton)``