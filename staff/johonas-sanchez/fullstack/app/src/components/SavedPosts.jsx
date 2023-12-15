import { useState, useEffect } from "react"

import Posts from "./Posts"

import retrieveSavedPosts from "../logic/retrieveSavedPosts"

function SavedPosts(props) {
   console.log("SavedPosts")

   const [posts, setPosts] = useState([])

   useEffect(() => {
      refreshPosts()
   }, [props.timestamp])

   function refreshPosts() {
      try {
         retrieveSavedPosts((error, posts) => {
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
