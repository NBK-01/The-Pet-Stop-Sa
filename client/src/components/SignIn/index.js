import React, {useState} from 'react'
import {ColumnOne, BlurElTwo, BlurEl, Img, ColumnTwo, MainContainer, SignUpHeading, Input, BtnWrapper, FormContainer, PetStop, SignUpBtn} from '../SignUp/signupEl'

import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from "../../utils/auth"




const Signin = (props) => {
        const [formState, setFormState] = useState({ email: '', password: '' });
        const [login, { error, data }] = useMutation(LOGIN_USER);
      
       
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
            const { data } = await login({
              variables: { ...formState },
            });
      
            Auth.login(data.login.token);
          } catch (e) {
            console.error(e);
          }
      
          
          setFormState({
            email: '',
            password: '',
          });
        };      
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
                {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
                <FormContainer>
                    <Input placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}/>
                    <Input/>
                    <BtnWrapper>
                    <SignUpBtn> Sign-In </SignUpBtn>
                </BtnWrapper>
                </FormContainer>
            )}
            </MainContainer>
                
           </ColumnTwo>
        </>
    )
}

export default Signin
