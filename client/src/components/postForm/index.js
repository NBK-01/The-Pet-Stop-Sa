


import React from 'react'
import {ColumnOne, BlurElTwo, BlurEl, Img, ColumnTwo, MainContainer, SignUpHeading, Input, BtnWrapper, FormContainer, PetStop, SignUpBtn} from '../SignUp/signupEl'
import {FormLabel, FormSelect} from './postformEl'

const Postform = () => {
    return (
        <>
        <ColumnOne>
         <MainContainer>
             <SignUpHeading> help <PetStop> others </PetStop> by posting</SignUpHeading>

             <FormContainer>
                 <Input/>
                 <Input/>
                 <FormLabel for="category">
                    Choose a category
                 </FormLabel>
                 <FormSelect id="category">
                    <option> Breeder </option>
                    <option> Adoption </option>
                 </FormSelect>
                 <BtnWrapper>
                 <SignUpBtn> Submit </SignUpBtn>
             </BtnWrapper>
             </FormContainer>

         </MainContainer>
             
        </ColumnOne>

        <ColumnTwo> 
                 <BlurEl/>
                 <BlurElTwo/>
                 <Img src={require('../../images/form.svg').default}/>
        </ColumnTwo>
        </>
    )
}

export default Postform

    