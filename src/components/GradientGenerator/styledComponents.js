// Style your elements here
import styled from 'styled-components'

export const Bg = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.oneColor},
    ${props => props.twoColor}
  );
`

export const Direction = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  list-style: none;
`

export const ColorInput = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
`

export const CustomButton = styled.button`
  background-color: lightgreen;
  padding: 4px;
  border-radius: 6px;
`
