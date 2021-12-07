import React from 'react'
import {ColumnOne, ColumnTwo, Img} from './signupEl'
import { BlurEl, BlurElTwo } from './signupEl'
import { MainContainer, SignUpHeading, PetStop, FormContainer, Input, BtnWrapper, SignUpBtn}from './signupEl'


const SignUp = () => {
    return (
           <>

           <ColumnOne>
            <MainContainer>
                <SignUpHeading> sign up to <PetStop> the pet stop </PetStop> </SignUpHeading>
                <FormContainer>
                    <Input/>
                    <Input/>
                    <Input/>
                </FormContainer>
                <BtnWrapper>
                    <SignUpBtn> Sign-Up </SignUpBtn>
                </BtnWrapper>
            </MainContainer>
           </ColumnOne>

           <ColumnTwo> 
                    <BlurEl/>
                    <BlurElTwo/>
                    <Img src={require('../../images/signin.svg').default}/>
           </ColumnTwo>
           </>
    )
}

export default SignUp
