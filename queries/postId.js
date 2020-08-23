import gql from "graphql-tag";
export const  POST_ID = gql`
    query post($id: ID!) {
        post(idType: DATABASE_ID, id: $id) {
            id
            author {
              name
            }
            date
            content
            comments {
              nodes {
                content
                author {
                  ... on CommentAuthor {
                    name
                  }
                }
              }
            }
            featuredImage {
                altText
                link
                mediaItemUrl
            }
            title
        }
    }
`