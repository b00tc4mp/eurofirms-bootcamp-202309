import { useState, useEffect } from "react"

import Posts from "./Posts"

import { JWTError } from '../utils/errors'

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
