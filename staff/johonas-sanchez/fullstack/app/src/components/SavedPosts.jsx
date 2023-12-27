import { useState, useEffect } from "react"

import Posts from "./Posts"

import logic from '../logic'

function SavedPosts(props) {
   console.log("SavedPosts")

   const [posts, setPosts] = useState([])

   useEffect(() => {
      refreshPosts()
   }, [props.timestamp])

   function refreshPosts() {
      try {
         logic.retrieveSavedPosts((error, posts) => {
            if (error) {
               props.onError(error)

               return
            }

            setPosts(posts)
         })
      } catch (error) {
         props.onError(error)
      }
   }

   function handlePostLikeToggled() {
      refreshPosts()
   }

   function handlePostSaveToggled() {
      refreshPosts()
   }

   function handlePostDeleted() {
      refreshPosts()
   }

   return (
      <Posts posts={posts} onPostLikeToggled={handlePostLikeToggled} onPostSaveToggled={handlePostSaveToggled} onPostDeleted={handlePostDeleted} onError={props.onError} />
   )
}

export default SavedPosts
