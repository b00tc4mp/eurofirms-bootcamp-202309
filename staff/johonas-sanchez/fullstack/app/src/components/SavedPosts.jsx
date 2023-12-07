import { useState, useEffect } from 'react'

import Posts from './Posts'

import retrieveSavedPosts from '../logic/retrieveSavedPosts'

function SavedPosts(props) {
   console.log('SavedPosts')

   const [posts, setPosts] = useState([])

   useEffect(() => {
      refreshPosts()
   }, [props.timestamp])

   function refreshPosts() {
      try {
         retrieveSavedPosts(window.sessionUserId, (error, posts) => {
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

   function handleLikeClick() {
      refreshPosts()
   }

   function handleSaveClick() {
      refreshPosts()
   }

   function handleDeleteClick() {
      refreshPosts()
   }

   return <Posts posts={posts} onLikeClick={handleLikeClick} onSaveClick={handleSaveClick} onDeleteClick={handleDeleteClick} />
}

export default SavedPosts
