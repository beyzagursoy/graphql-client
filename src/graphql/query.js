import { gql } from "@apollo/client";


export const GET_POSTS = gql`
  query getPosts {
    getPosts {
    id
    title
    description
    url
  }
  }
`;

export const GET_POST = gql`
  query GetPost($postId: ID!) {
  getPost(postId: $postId) {
    id
    title
    description
    url
  }
}
`;