import React from 'react'
import {AboutContainer, AboutWrapper, AboutRow, ColumnOne, ColumnTwo, TextWrapper, Heading, Subtitle, ImgWrapper, Img, BlurEl, BlurElTwo, BlurElThree, TextField, SubBtn} from './heroEl'

const AboutView = ({id, imgStart, headline, description, alt}) => {
    return (
        <AboutContainer id={id}>
            <AboutWrapper imgStart={imgStart}>
                <AboutRow>
                <BlurEl/>
                <BlurElTwo/>
                <BlurElThree/>
                    <ColumnOne>
                    <TextWrapper>
                        <Heading> {headline} </Heading>
                        <Subtitle> {description} </Subtitle>
                        <TextField/>
                        <SubBtn>Subscribe</SubBtn>
                    </TextWrapper>
                    </ColumnOne>
                    <ColumnTwo>
                        <ImgWrapper>
                            <Img src={require('../../images/Saly.svg').default} alt={alt}/>
                        </ImgWrapper>
                    </ColumnTwo>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default AboutView
