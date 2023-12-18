import Container from '../library/Container'

import Post from './Post'

function Posts(props) {
    console.log('Posts')
    
    return <Container className ='md:grid md:grid-cols-2 lg:grid-cols-3' align="center" aria-label={props['aria-label']}>
        {props.posts.map(function (post) {
                    return <Post key={post.id} post={post} onLikeToggled={props.onPostLikeToggled} onSaveToggled={props.onPostSaveToggled} onDeleted={props.onPostDeleted} onError={props.onError} />
        })}
    </Container>
}

export default Posts