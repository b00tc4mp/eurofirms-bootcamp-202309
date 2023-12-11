import Container from "./Container"
import Post from "./Post"

function Posts(props) {
   return (
      <Container align="center" aria-label={props["aria-label"]}>
         {props.posts.map(function (post) {
            return (
               <Post
                  key={post.id}
                  post={post}
                  onPostLikeToggled={props.onPostLikeToggled}
                  onPostSaveToggled={props.onPostSaveToggled}
                  onPostDeleted={props.onPostDeleted}
               />
            )
         })}
      </Container>
   )
}

export default Posts
