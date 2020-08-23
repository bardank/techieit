import gql from "graphql-tag";

export const  ALL_POSTS = gql`
{
   posts {
    nodes {
      featuredImage {
        sourceUrl
        mediaItemUrl
        sizes(size: THUMBNAIL)
      }
      postId
      content
      title
      date
      databaseId
    }
  }
}
`