import styled from 'styled-components'

export const FormLabel = styled.label` 
color: #000;
cursor: pointer; 
font-size: 30px;
font-weight: 800; 
text-decoration: none;
font-family: ManropeB;
line-height: 32px;
`


export const FormSelect = styled.select`
background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.14);
  border-radius: 5px;
  width: 50%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  font-weight: 800;
  font-size: 15px;
  line-height: 75px;
  font-family: ManropeB;
  color: black;
  &:focus {
    display: inline-block;
    transform: scale(1.1);
    border-radius: 7px;
  }
  /* &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  } */
`;


export const DescInput = styled.input`
background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.14);
  border-radius: 5px;
  width: 50%;
  height: 5.5rem;
  resize: none;
  padding: 1rem;
  border: none;
  outline: none;
  font-weight: 800;
  font-size: 15px;
  line-height: 75px;
  font-family: ManropeB;
  color: black;
  &:focus {
    display: inline-block;
    transform: scale(1.1);
    border-radius: 7px;
  }
`