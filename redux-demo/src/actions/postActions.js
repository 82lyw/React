import { FETCH_POSTS } from './types'

// export function fetchPosts() {
//     return function (dispatch) {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res => res.json)
//         .then(posts => 
//             dispatch({
//                 type: FETCH_POSTS,
//                 payload: posts
//             }))
//     }
// }

export const fetchPosts = () => dispatch => {
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json)
            .then(posts => 
                dispatch({
                    type: FETCH_POSTS,
                    payload: posts
        }))
    }
}

export const createPost = postData => dispatch => {
    console.log("createPost");
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(post =>
        dispatch({
          payload: post
        })
      )
  }