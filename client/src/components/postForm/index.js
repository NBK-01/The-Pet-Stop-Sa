


import React from 'react'
import {ColumnOne, BlurElTwo, BlurEl, Img, ColumnTwo, MainContainer, SignUpHeading, Input, BtnWrapper, FormContainer, PetStop, SignUpBtn} from '../SignUp/signupEl'


const Postform = () => {
    return (
        <>
        <ColumnOne>
         <MainContainer>
             <SignUpHeading> sign up to <PetStop> the pet stop </PetStop> </SignUpHeading>

             <FormContainer>
                 <Input/>
                 <Input/>
                 <Input/>
                 <BtnWrapper>
                 <SignUpBtn> Sign-Up </SignUpBtn>
             </BtnWrapper>
             </FormContainer>

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

export default Postform

    