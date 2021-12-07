import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {useMutation} from '@apollo/client'
import { ADD_USER } from '../../utils/mutations'
import Auth from '../../utils/auth'





import {ColumnOne, ColumnTwo, Img} from './signupEl'
import { BlurEl, BlurElTwo } from './signupEl'
import { MainContainer, SignUpHeading, PetStop, FormContainer, Input, BtnWrapper, SignUpBtn, ErrorMessage}from './signupEl'


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


                {data ? ( <p> Success! <Link to="/"> back to homepage </Link> </p> ) : (
                <FormContainer onSubmit={handleFormSubmit}>
                    <Input 
                    placeholder="Username" 
                    name="username"
                    type="text" 
                    value={formState.name}
                    onChange={handleChange}
                    />
                    <Input
                    placeholder="E-mail"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    />
                    <Input
                    placeholder="*********"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                    />
                    <BtnWrapper>
                    <SignUpBtn type="submit"> Sign-Up </SignUpBtn>
                </BtnWrapper>
                </FormContainer>
                )}
            {error && (
                <ErrorMessage> {error.message}</ErrorMessage>
            )}    

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
