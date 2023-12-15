import { useState, useEffect } from "react"

import Posts from "./Posts"

import { JWTError } from '../utils/errors'

import retrieveMyPosts from "../logic/retrieveMyPosts"


function MyPosts(props) {
   console.log("MyPosts")

   const [posts, setPosts] = useState([])

   useEffect(() => {
      refreshPosts()
   }, [])

   function refreshPosts() {
      try {
         retrieveMyPosts((error, posts) => {
            if (error) {
               alert(error.message)

               return
            }

            setPosts(posts)
         })
      } catch (error) {
         if (error instanceof JWTError)
                props.onError(error)
            else
                alert(error.message)
      }
   }

   function handlePostLikeToggled() {
      refreshPosts()
   }

   function handlePostDeleted() {
      refreshPosts()
   }

   function handlePostSaveToggled() {
      refreshPosts()
   }

   return (
      <Posts posts={posts} onPostLikeToggled={handlePostLikeToggled} onPostSaveToggled={handlePostSaveToggled} onPostDeleted={handlePostDeleted} onError={props.onError}  />
   )
}

export default MyPosts
