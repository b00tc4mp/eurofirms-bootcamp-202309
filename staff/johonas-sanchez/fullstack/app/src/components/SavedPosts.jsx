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
         retrieveSavedPosts(sessionStorage.userId, (error, posts) => {
            if (error) {
               alert(error.message)

               return
            }

            setPosts(posts)
         })
      } catch (error) {
         alert(error.message)
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
      <Posts posts={posts} onPostLikeToggled={handlePostLikeToggled} onPostSaveToggled={handlePostSaveToggled} onPostDeleted={handlePostDeleted} />
   )
}

export default SavedPosts
