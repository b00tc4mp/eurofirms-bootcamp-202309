import toggleLikePost from "../logic/toggleLikePost"
import deletePost from "../logic/deletePost"
import toggleSavePost from "../logic/toggleSavePost"

import Button from "./Button"

function Post(props) {
   console.log("Post")

   const post = props.post

   function handlePostLikeToggled() {
      try {
         toggleLikePost(sessionStorage.userId, post.id, (error) => {
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
            deletePost(sessionUserId, post.id, (error) => {
               if (error) {
                  alert(error.message)

                  return
               }

               props.onPostDeleted()
            })
         } catch (error) {
            alert(error.message)
         }
   }

   function handlePostSaveToggled() {
      try {
         toggleSavePost(sessionStorage.userId, post.id, (error) => {
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
      <article className="flex flex-col p-[.5rem] bg-[ghostwhite] hover:bg-[lightgray]">
         <h3 className="self-start">{post.author.name}</h3>

         <img className="max-w-[300px]" src={post.image} alt={post.imageDescription} title={post.imageDescription} />

         <p>{post.text}</p>

         <div className="flex">
            <Button onClick={handlePostLikeToggled} title={post.liked ? "Unlike" : "Like"} aria-label={post.liked ? "Unlike" : "Like"}>
               {(post.liked ? "❤️" : "🩶") + " " + post.likes.length + " likes"}
            </Button>

            <Button onClick={handlePostSaveToggled} title={post.saved ? "Unsave" : "sSave"} aria-label={post.saved ? "Unsave" : "Save"}>
               {post.saved ? "⭐️" : "✩"}
            </Button>

            {post.author.id === sessionStorage.userId ? (
               <Button title="Delete" aria-label="Delete" onClick={handlePostDeleted}>
                  🗑️
               </Button>
            ) : null}
         </div>
      </article>
   )
}

export default Post
