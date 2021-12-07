import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      post {
        _id
        title
        description
        category
        postDate
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      title
      description
      category
      postAuthor
      postDate
    }
  }
`;

export const QUERY_SINGLE_Post = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      title
      description
      category
      postAuthor
      postDate
    }
  }
`;

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       posts {
//         _id
//         title
//         postAuthor
//         postDate
//         description
//         category
//       }
//     }
//   }
// `;
