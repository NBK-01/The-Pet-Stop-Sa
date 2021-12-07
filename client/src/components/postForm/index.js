


import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations'
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries'

import Auth from '../../utils/auth'




import {ColumnOne, BlurElTwo, BlurEl, Img, ColumnTwo, MainContainer, SignUpHeading, Input, BtnWrapper, FormContainer, PetStop, SignUpBtn} from '../SignUp/signupEl'
import {FormLabel, FormSelect, DescInput} from './postformEl'



const Postform = () => {
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const[addPost, {error}] = useMutation(ADD_POST, {
        update(cache, {data: {addPost} }){
            try{
                const {posts} = cache.readQuery({query: QUERY_POSTS});
                
                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: {posts: [addPost, ...posts] },
                })
            }catch(e){
                console.log(e)
            }
        }
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const data = await addPost({
              variables: {
                title,
                description, category,
                postAuthor: Auth.getProfile().data.username,
              },
            });

            setCategory('');
            setDescription('');
            setTitle('');
        } catch(err){
            console.error(err)
        }
    };

    const handleChangeDesc = (event) => {
        const { name, value } = event.target;

        if(name === 'description'){
           
            setDescription(value);
            
        }
    }

        const handleChangeTitle = (event) => {
            const { name, value } = event.target;
    
            if(name === 'title'){
               
                setTitle(value);
                
            }
    }


    const handleChangeCat = (event) => {
        const { name, value } = event.target;

        if(name === 'category'){
           
            setCategory(value);
            
        }
}

    return (
        <>
        <ColumnOne>
         <MainContainer>
             <SignUpHeading> help <PetStop> others </PetStop> by posting</SignUpHeading>

             <FormContainer onSubmit={handleFormSubmit}>
                 <Input
                 name='title'
                 placeholder="Enter a Title"
                 value={title}
                 onChange={handleChangeTitle}
                 />
                 <DescInput
                 name="description"
                 placeholder="Description & contact details, etc.."
                 value={description}
                 onChange={handleChangeDesc}
                 />
                 <FormLabel>
                    Choose a category
                 </FormLabel>
                 <FormSelect onChange={handleChangeCat} value={category} name="category" > 
                    <option value="Breeding / Sale"> Breeder </option>
                    <option value="Adoption"> Adoption </option>
                 </FormSelect>
                 <BtnWrapper>
                 <SignUpBtn type="submit"> Submit </SignUpBtn>
             </BtnWrapper>
             {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
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

    