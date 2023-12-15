import Container from "../library/Container"
import Post from "./Post"

function Posts(props) {
   return (
      <Container className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-20" align="center" aria-label={props["aria-label"]}>
         {props.posts.map(function (post) {
            return (
               <Post
                  key={post.id}
                  post={post}
                  onPostLikeToggled={props.onPostLikeToggled}
                  onPostSaveToggled={props.onPostSaveToggled}
                  onPostDeleted={props.onPostDeleted}
                  onError={props.onError}
               />
            )
         })}
      </Container>
   )
}

export default Posts
