import React from 'react'
import { Link } from 'react-router-dom'
import {PostPage, PostContainer, PostImg, Img, PostCategory, PostAuthor, PostTitle, PostDescription} from './postEl'

const Posts = () => {
    return (
        <PostPage>
           <PostContainer> 
                <PostImg>
                    <Img src={require('../../images/dog.jpg').default}/>    
                </PostImg> 
                <div>
                    <PostCategory> HELLO </PostCategory>
                    <PostAuthor> NAyef Kanaan</PostAuthor>
                    <PostTitle> DOGGO </PostTitle>
                    <PostDescription> lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</PostDescription>
                </div>   
           </PostContainer> 
            
        </PostPage>
    )
}

export default Posts
