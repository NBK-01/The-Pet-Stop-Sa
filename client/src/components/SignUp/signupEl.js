import styled from 'styled-components'


// export const SignUpContainer = styled.div`
// min-height: 95vh;
// display: flex;
// box-sizing: border-box;
// margin: 0;
// padding: 0;
// border: none;
// overflow: hidden;
// `

export const ColumnOne = styled.div`
height: 100%;
width: 50%;
position: fixed;
top: 0;
overflow: hidden;
right: 0;
overflow: hidden;

@media screen and (max-width:768px){
    width: 100%;
}
`

export const ColumnTwo = styled.div`
/* background: #fb8500; */
height: 100%;
width: 50%;
position: fixed;
top: 0;
overflow: hidden;
left: 0;

@media screen and (max-width:768px){
    display: none;
}
`

// export const ImgWrapper = styled.div`
// max-width: 100%;
// height: 50%;
// justify-content: center;
// align-items: center;
// `

export const Img = styled.img`
width: 90%;
height: 100%;
margin: 0 0 10px 0;
padding-right: 0;
display: flex;
z-index: -10000000;
`



export const BlurEl = styled.div`
width: 230px;
height: 230px;
z-index: -10;
display: flex;
position: absolute;
left: 45%;
top: 15%;
background: #219ebc;
filter: blur(80px);
border-radius: 10px;
transform: rotate(-170.77deg);
`

export const BlurElTwo = styled.div`
width: 200px;
height: 200px;
z-index: -10;
display: flex;
position: absolute;
left: 19%;
top: 60%;
background: #fb8500;
filter: blur(70px);
border-radius: 10px;
transform: rotate(-170.77deg);
`


export const MainContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 80%;
width: 80%;
position: absolute;
top: 10%; 
right: 10%;
box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);	
z-index: 1;
background: inherit;
border-radius: 8px;

&:before{
    content: "";
	position: absolute;
	background: inherit;
	z-index: -1;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
	filter: blur(10px);
	margin: -20px;
}
`;

export const SignUpHeading = styled.h1`
font-weight: 800;
font-size: 40px;
line-height: 82px;
font-family: ManropeB;
text-transform: lowercase;
color: black;
`


export const PetStop = styled.span`
color: #fb8500;
text-decoration: underline;
`



export const FormContainer = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 70%;
width: 100%;
`



export const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.14);
  border-radius: 5px;
  width: 50%;
  height: 2rem;
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

export const BtnWrapper = styled.div`
margin: 1rem 0 2rem 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const SignUpBtn = styled.button`
  background: #fb8500;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 15%;
  height: 3rem;
  border: none;
  color: white;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  font-family: Manrope;
  font-weight: 400;
  line-height: 19px;
`;

export const ErrorMessage = styled.div` 
width: 100%;
height: 30px;
border: 1px solid #fb8500;
font-size: 15px;
border-radius: 5px;
cursor: pointer;
font-family: Manrope;
font-weight: 400;
line-height: 19px;
`
