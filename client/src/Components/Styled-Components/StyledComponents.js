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

export const MatchText = styled.div`
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

export const ContinueSwiping = styled.button`
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