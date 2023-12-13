import Post from './Post'
import Container from './Container'

function Posts(props) {

    return <Container className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-20" align="center" aria-label={props['aria-label']}>
        {props.posts.map(function (post) {
            return <Post key={post.id} post={post} onLikeToggled={props.onPostLikeToggled} onSaveToggled={props.onPostSaveToggled} onDeleted={props.onPostDeleted} />
        })}
    </Container>
}

export default Posts