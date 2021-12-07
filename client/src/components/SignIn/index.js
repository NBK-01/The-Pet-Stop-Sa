import React from 'react'
import {ColumnTwo, BlurElTwo, BlurEl, Img} from '../SignUp/signupEl'

const Signin = () => {
    return (
        <>
            <ColumnTwo> 
                    <BlurEl/>
                    <BlurElTwo/>
                    <Img src={require('../../images/signin.svg').default}/>
           </ColumnTwo>
        </>
    )
}

export default Signin
