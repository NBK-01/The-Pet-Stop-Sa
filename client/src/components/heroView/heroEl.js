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
margin-right: 130px;
padding: 0 15px;
grid-area: col1;
`

export const ColumnTwo = styled.div`
margin-bottom: 15px;
margin-left: 100px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`

export const TopLine = styled.p`
color: #01bf71;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: #000;

@media screen and (max-width:480px){
    font-size: 30px;

}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: #000;
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
width: 200px;
height: 200px;
z-index: -10;
display: flex;
position: absolute;
left: 40%;
background: #FB8500;
filter: blur(100px);
border-radius: 10px;
transform: rotate(-170.77deg)
`

export const BlurElTwo = styled.div`
width: 180px;
height: 180px;
z-index: -10;
display: flex;
position: absolute;
left: 51%;
top: 35%;
background: #219EBC;
filter: blur(100px);
border-radius: 10px;
transform: rotate(-170.77deg)
`