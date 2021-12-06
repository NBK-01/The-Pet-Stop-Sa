import styled from 'styled-components'

export const AboutContainer = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '010606')};

@media screen and (max-width:768px){
    padding: 100px 0;
}
`


export const AboutWrapper = styled.h1`
display: grid;
z-index: 1;
height: 750px;
max-width: 1600px;
margin-right: auto; 
margin-left: auto;
padding: 0 24px;
justify-content: center;
`

export const AboutRow = styled.div`
display: grid;
grid-auto-columns: minimax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

@media screen and (max-width:768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`


export const ColumnOne = styled.div`
margin-bottom: 15px;
margin-right: 60px;
padding: 0 15px;
grid-area: col1;
`

export const ColumnTwo = styled.div`
margin-bottom: 15px;
margin-left: 55px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 650px;
padding-top: 0;
padding-bottom: 60px;
`


export const Heading = styled.h1`
margin-bottom: 24px;
font-weight: 800;
font-size: 60px;
line-height: 82px;
font-family: ManropeB;
text-transform: lowercase;
color: black;

@media screen and (max-width:480px){
    font-size: 30px;

}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-family: Manrope;
font-style: normal;
font-weight: 600;
font-size: 23px;
line-height: 32px;

text-transform: lowercase;

color: #000000;

opacity: 0.8;
`

export const ImgWrapper = styled.div`
max-width: 100%;
height: 100%;
`

export const Img = styled.img`
width: 100%;
height: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`

export const BlurEl = styled.div`
width: 250px;
height: 250px;
z-index: -10;
display: flex;
position: absolute;
left: 50%;
background: #FB8500;
filter: blur(200px);
border-radius: 10px;
transform: rotate(-170.77deg);
`

export const BlurElTwo = styled.div`
width: 180px;
height: 180px;
z-index: -10;
display: flex;
position: absolute;
left: 60%;
top: 35%;
background: #219EBC;
filter: blur(75px);
border-radius: 10px;
transform: rotate(-170.77deg);
`

export const BlurElThree = styled.div`
width: 180px;
height: 180px;
z-index: -10;
display: flex;
position: absolute;
left: 85%;
top: -4%;
background: #219ebc;
filter: blur(100px);
border-radius: 10px;
transform: rotate(-170.77deg);
`


export const TextField = styled.textarea`
width: 530px;
height: 70px;
border: none;
background: #FFFFFF;
box-shadow: 20px 10px 100px rgba(0, 0, 0, 0.1);
border-radius: 5px;
resize: none;
font-size: 20px;
`

export const SubBtn = styled.button`
background: #fb8500;
white-space: nowrap;
padding: 10px 22px;
color: #fff;
font-size: 16px;
height: 50px;
outline: none;
border: none;
border-radius: 5px;
cursor: pointer;
transition: all 0.5s ease-in-out;
text-decoration: none;
font-family: ManropeB;
font-weight: 400;
line-height: 19px;
position: absolute;
left: 30%;
top: 600px;
`