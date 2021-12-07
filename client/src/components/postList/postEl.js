import styled from 'styled-components' 


export const PostPage = styled.section`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const PostContainer = styled.div`
max-height: 200px;
max-width: 900px;
padding: 5rem;
background-color: #fff;
box-shadow: 0 1.4rem 8rem rgba(0,0,0,0.2);
display: flex;
align-items: center;
border-radius: 10px;
`





export const PostImg = styled.div`
min-width:25rem;
max-width:25rem;
height: 20rem;
transform: translateX(-8rem);
position: relative;
`

export const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
display: block;
border-radius: 5px;
border: 5px solid #fb8500;

&::before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* background: #fb8500; */

    box-shadow: .5rem .5rem 3rem 1px rgba(0,0,0,.05);
    border-radius: 5px;
}
`
export const PostCategory = styled.span` 
display: block;
color: rgba(251, 133, 0, 0.5);
font-size: 15px;
font-family: Manrope;
font-weight: 800;
margin: .5rem 0;
`

export const PostAuthor = styled.span`
display: block;
color: rgba(251, 133, 0, 0.5);
font-size: 12px;
font-weight: 800;
font-family: Manrope;
margin: .5rem 0;
`

export const PostTitle = styled.h1`
font-weight: 800; 
font-size: 30px;
text-decoration: none;
font-family: ManropeB;
/* line-height: 82px; */
color: rgba(251, 133, 0, 1);
margin: 1.5rem 0 2rem;
`
export const PostDescription = styled.h1`
/* margin-bottom: 3rem; */
font-size: 23px;
font-weight: 800;
text-decoration: none;
font-family: Manrope;
color: rgba(0, 0, 0, 0.6);
/* margin: 1.5rem 0 2rem; */
`


