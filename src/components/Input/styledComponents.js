import styled from 'styled-components'

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5d0fe;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 300px;
  height: 150px;
  border-radius: 10px;
  border: 0px solid;
`

export const HeadingText = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: black;
`
export const inputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
`

export const InputHeading = styled.input`
  width: 70%;
  height: 30px;
  padding: 10px;
  border: 1px grey solid;
  color: black;
  border-radius: 5px;
  margin-right: 5px;
`
export const Button = styled.button`
  width: 50px;
  height: 30px;
  background-color: #d946ef;
  border: 0px solid;
  border-radius: 5px;
  align-self: flex-end;
`
export const Para = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  width: 500px;
  display: inline;
  align-self: flex-start;
`
