import React from 'react'
import {AboutContainer, AboutWrapper, AboutRow, ColumnOne, ColumnTwo, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img, BlurEl, BlurElTwo} from './heroEl'

const AboutView = ({id, imgStart, topLine, headline, description, alt}) => {
    return (
        <AboutContainer id={id}>
            <AboutWrapper imgStart={imgStart}>
                <AboutRow>
                <BlurEl/>
                <BlurElTwo/>
                    <ColumnOne>
                    <TextWrapper>
                        <TopLine> {topLine} </TopLine>
                        <Heading> {headline} </Heading>
                        <Subtitle> {description} </Subtitle>
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
