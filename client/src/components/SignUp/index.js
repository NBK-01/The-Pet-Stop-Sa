import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {useMutation} from '@apollo/client'
import { ADD_USER } from '../../utils/mutations'
import Auth from '../../utils/auth'





import {ColumnOne, ColumnTwo, Img} from './signupEl'
import { BlurEl, BlurElTwo } from './signupEl'
import { MainContainer, SignUpHeading, PetStop, FormContainer, Input, BtnWrapper, SignUpBtn}from './signupEl'


const SignUp = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [addUser, { error, data }] = useMutation(ADD_USER);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };


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
