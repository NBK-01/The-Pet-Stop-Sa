import React from 'react'
import { Link } from 'react-router-dom'
import {PostPage, PostPageIntro, PostContainer, PostImg, Img, PostCategory, PostAuthor, PostTitle, PostDescription} from './postEl'


const Posts = () => {
    return (
        <>
        <PostPageIntro> One step away from finding your pet 🐶 </PostPageIntro>
        <PostPage>
           <PostContainer> 
                <PostImg>
                    <Img src={require('../../images/dog.jpg').default}/>    
                </PostImg> 
                <div>
                    <PostCategory> Adoption </PostCategory>
                    <PostAuthor> Posted by:Nayef Kanaan</PostAuthor>
                    <PostTitle> hello </PostTitle>
                    <PostDescription> lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</PostDescription>
                </div>   
           </PostContainer> 
            
        </PostPage>
        </>
    )

}

export default Posts
