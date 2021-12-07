import React from 'react'
import { Link } from 'react-router-dom'
import {PostPage, PostPageIntro, PostContainer, PostImg, Img, PostCategory, PostAuthor, PostTitle, PostDescription} from './postEl'


const Posts = ({
    posts,
    title,
    showTitle = true,
    showUsername = true,
}) => {
    if (!posts) {
        return <PostPageIntro> No Listing available</PostPageIntro>
    }
    return (
        <>
       
        <PostPageIntro> One step away from finding your pet 🐶 </PostPageIntro>
        <PostPage>
                {showTitle && <h3>{title}</h3>}
                {posts && posts.map((post) => (
                    <PostContainer key={post.id}> 
                    <PostImg>
                        <Img src={require('../../images/dog.jpg').default}/>    
                    </PostImg> 
                    <div>
                        {showUsername ? (
                            <PostAuthor> Posted by: {post.postAuthor}</PostAuthor>
                        ) : (
                            <PostAuthor> Posted by: You</PostAuthor>
                        )}
                        <PostCategory> {post.category} </PostCategory>
                        <PostTitle> {post.title} </PostTitle>
                        <PostDescription> {post.description}</PostDescription>
                    </div>   
               </PostContainer> 
                ))}    
        </PostPage>
        </>
    )

}

export default Posts
