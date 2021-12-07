import React from 'react'
import {ColumnOne, ColumnTwo, Img} from './signupEl'
import { BlurEl, BlurElTwo } from './signupEl'

const SignUp = () => {
    return (
           <>
           <ColumnOne> </ColumnOne>


           <ColumnTwo> 
                    <BlurEl/>
                    <BlurElTwo/>
                    <Img src={require('../../images/signin.svg').default}/>
           </ColumnTwo>
           </>
    )
}

export default SignUp
