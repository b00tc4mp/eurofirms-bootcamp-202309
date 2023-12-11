import toggleLikePost from "../logic/toggleLikePost"
import deletePost from "../logic/deletePost"
import toggleSavePost from "../logic/toggleSavePost"

import Button from "./Button"

function Post(props) {
   console.log("Post")

   const post = props.post

   function handlePostLikeToggled() {
      try {
         toggleLikePost(window.sessionUserId, post.id, (error) => {
            if (error) {
               alert(error.message)

               return
            }

            props.onPostLikeToggled()
         })
      } catch (error) {
         alert(error.message)
      }
   }

   function handlePostDeleted() {
      const confirmed = confirm("Delete post?")

      if (confirmed)
         try {
            deletePost(sessionUserId, post.id)

            props.onPostDeleted()
         } catch (error) {
            alert(error.message)
         }
   }

   function handlePostSaveToggled() {
      try {
         toggleSavePost(window.sessionUserId, post.id, (error) => {
            if (error) {
               alert(error.message)

               return
            }

            props.onPostSaveToggled()
         })
      } catch (error) {
         alert(error.message)
      }
   }

   return (
      <article className="post">
         <h3>{post.author.name}</h3>

         <img className="post-image" src={post.image} alt={post.imageDescription} title={post.imageDescription} />

         <p>{post.text}</p>

         <Button onClick={handlePostLikeToggled} title={post.liked ? "Unlike" : "Like"} aria-label={post.liked ? "Unlike" : "Like"}>
            {(post.liked ? "❤️" : "🩶") + " " + post.likes.length + " likes"}
         </Button>

         <Button onClick={handlePostSaveToggled} title={post.saved ? "Unsave" : "sSave"} aria-label={post.saved ? "Unsave" : "Save"}>
            {post.saved ? "⭐️" : "✩"}
         </Button>

         {post.author.id === window.sessionUserId ? (
            <Button title="Delete" aria-label="Delete" onClick={handlePostDeleted}>
               🗑️
            </Button>
         ) : null}
      </article>
   )
}

export default Post
