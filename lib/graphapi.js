import { GraphQLClient } from 'graphql-request';

// Initialize the GraphQL client
 const client = new GraphQLClient('https://examhelp.online/blog/graphql'); 
//const client = new GraphQLClient('https://t20cricketworldcup.info/graphql');

export async function fetchGraphPosts() {
  const query = `
    query AllPosts {
      posts(first: 200) {
        edges {
          node {
            id
            title
            excerpt
            content
            date
            author {
              node {
                id
                name            
              }
            }
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await client.request(query);
  return data.posts.edges;
}




export async function fetchSinglePost1(slug) {
    const query = `
      query SinglePost($slug: String!) {
        post(idType: SLUG, id: ${slug}) {
          id
          title
          content
          excerpt
          date
          slug
          author {
            node {
              id
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const variables = { slug };
    const data = await client.request(query, variables);
    return data.postBy;
  }


  export async function fetchSinglePost(slug) {
    const query = {
        query: 
        `query PostBySlug($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    author {
      node {
        avatar {
          height
          url
          width
        }
        id
        name
        slug
      }
    }
    id
    categories {
      edges {
        node {
          databaseId
          id
          name
          slug
        }
      }
    }
    content
    date
    excerpt
    featuredImage {
      node {
        altText
        caption
        sourceUrl
        srcSet
        sizes
        id
      }
    }
    modified
    databaseId
    title
    slug
    isSticky
    desiredSlug
  }
}`,
  
    };

    const variables = {slug};
    console.log("variables 1 : " , variables);
    const data = await client.request(query, variables);
    console.log("data : " , data)
    return data.postBy;
}


// export async function getPostBySlug(slug) {
//     const data = await fetchAPI(
//       `query GetPost($id: ID = "") {
//       post(id: $id, idType: SLUG) {
//         content
//         featuredImage {
//           node {
//             sourceUrl
//           }
//         }
//         slug
//         title
//       }
//     }`,
//       {
//         variables: {
//           id: slug,
//         },
//       }
//     );
  
//     return data?.post;
//   }