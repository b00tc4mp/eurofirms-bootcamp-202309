import Container from "./Container";
import Post from "./Post";

function Posts(props) {
    return <Container align="center" aria-label={props['aria-label']}>
        {props.posts.map(function (post) {
            return <Post key={post.id} post={post} userPosts={props.userPosts} onUserClick={props.onUserClick} onLikeClick={props.onLikeClick} onSaveClick={props.onSaveClick} onDeleteClick={props.onDeleteClick} />
        })}
    </Container>
}

export default Posts
