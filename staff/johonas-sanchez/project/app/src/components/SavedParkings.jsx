import { useState, useEffect } from "react"



import logic from '../logic'

function SavedParkings() {
   console.log("SavedParkings")

//    const [posts, setPosts] = useState([])

//    useEffect(() => {
//       refreshPosts()
//    }, [props.timestamp])

//    function refreshPosts() {
//       try {
//          logic.retrieveSavedPosts((error, posts) => {
//             if (error) {
//                props.onError(error)

//                return
//             }

//             setPosts(posts)
//          })
//       } catch (error) {
//          props.onError(error)
//       }
//    }

//    function handlePostLikeToggled() {
//       refreshPosts()
//    }

//    function handlePostSaveToggled() {
//       refreshPosts()
//    }

//    function handlePostDeleted() {
//       refreshPosts()
//    }

   return (
      <h1>Saved Parkings</h1>
   )
}

export default SavedParkings