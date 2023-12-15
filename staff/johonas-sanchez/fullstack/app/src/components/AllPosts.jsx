import { useState, useEffect } from "react"

import Posts from "../components/Posts"

import retrievePosts from "../logic/retrievePosts"

import { JWTError } from '../utils/errors'

function AllPosts(props) {
   console.log("AllPosts")

   const [posts, setPosts] = useState([])

   useEffect(() => {
      refreshPosts()
   }, [props.timestamp])

   function refreshPosts() {
      try {
         retrievePosts((error, posts) => {
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
      <Posts posts={posts} onPostLikeToggled={handlePostLikeToggled} onPostSaveToggled={handlePostSaveToggled} onPostDeleted={handlePostDeleted} onError={props.onError} />
   )
}

export default AllPosts
