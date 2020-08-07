import gql from "graphql-tag";

export const  ALL_POSTS = gql`
{
  posts {
    edges {
      node {
        content
        id
        title
        date
        postId
      }
    }
  }
}
`