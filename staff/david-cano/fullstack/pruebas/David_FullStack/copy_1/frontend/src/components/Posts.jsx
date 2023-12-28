import Post from './Post'
import Container from './Container'

function Posts(props) {
    console.log('Posts')
    
    return <Container align="center" aria-label={props['aria-label']}>
        {props.posts.map(function (post) {
            return <Post key={post.id} post={post} onLikeClick={props.onLikeClick} onSaveClick={props.onSaveClick} onDeleteClick={props.onDeleteClick} />
        })}
    </Container>
}

export default Posts