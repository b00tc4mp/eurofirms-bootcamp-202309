import { useState, useEffect } from "react"

import Posts from "./Posts"

import retrieveMyPosts from "../logic/retrieveMyPosts"

function MyPosts(props) {
   console.log("MyPosts")

   const [posts, setPosts] = useState([])

   useEffect(() => {
      refreshPosts()
   }, [props.timestamp])

   function refreshPosts() {
      try {
         retrieveMyPosts(window.sessionUserId, (error, posts) => {
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

export default MyPosts
