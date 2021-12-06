import React from 'react'
import {AboutContainer, AboutWrapper, AboutRow, ColumnOne, ColumnTwo, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './heroEl'

const AboutView = () => {
    return (
        <AboutContainer  >
            <AboutWrapper>
                <AboutRow>
                    <ColumnOne>
                    <TextWrapper>
                        <TopLine> HELLO </TopLine>
                        <Heading > HEADLINE TINGS </Heading>
                        <Subtitle > DESC lorem ipsum dolor sit am</Subtitle>
                    </TextWrapper>
                    </ColumnOne>
                    <ColumnTwo>
                        <ImgWrapper>
                            <Img src="../../assets/Saly.png"/>
                        </ImgWrapper>
                    </ColumnTwo>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default AboutView