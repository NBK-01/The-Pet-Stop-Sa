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
`

export const ColumnTwo = styled.div`
/* background: #fb8500; */
height: 100%;
width: 50%;
position: fixed;
top: 0;
overflow: hidden;
left: 0;
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