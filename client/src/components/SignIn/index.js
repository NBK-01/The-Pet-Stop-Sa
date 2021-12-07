import React from 'react'
import {ColumnOne, BlurElTwo, BlurEl, Img, ColumnTwo, MainContainer, SignUpHeading, Input, BtnWrapper, FormContainer, PetStop, SignUpBtn} from '../SignUp/signupEl'

const Signin = () => {
    return (
        <>
            <ColumnOne> 
                    <BlurEl/>
                    <BlurElTwo/>
                    <Img src={require('../../images/signup.svg').default}/>
           </ColumnOne>

           <ColumnTwo>
            <MainContainer>
                <SignUpHeading> Welcome back to <PetStop> the pet stop </PetStop> </SignUpHeading>
                <FormContainer>
                    <Input/>
                    <Input/>
                    <Input/>
                    <BtnWrapper>
                    <SignUpBtn> Sign-In </SignUpBtn>
                </BtnWrapper>
                </FormContainer>

            </MainContainer>
                
           </ColumnTwo>
        </>
    )
}

export default Signin
