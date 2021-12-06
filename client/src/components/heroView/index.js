import React from 'react'
import {AboutContainer, AboutWrapper, AboutRow, ColumnOne, ColumnTwo, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './aboutEl'

const AboutView = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt}) => {
    return (
        <AboutContainer lightBg={lightBg} id={id}>
            <AboutWrapper imgStart={imgStart}>
                <AboutRow>
                    <ColumnOne>
                    <TextWrapper>
                        <TopLine> {topLine} </TopLine>
                        <Heading lightText={lightText}> {headline} </Heading>
                        <Subtitle darkText={darkText}> {description} </Subtitle>
                    </TextWrapper>
                    </ColumnOne>
                    <ColumnTwo>
                        <ImgWrapper>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </ColumnTwo>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default AboutView