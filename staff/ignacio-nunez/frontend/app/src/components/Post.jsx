import Button from "./Button"
import toggleLikePost from "../logic/toggleLikePost"
import retrieveSavedPosts from "../logic/retrieveSavedPosts"
import deletePost from "../logic/deletePost"
import toggleSavePost from "../logic/toggleSavePost"

function Post (props){
    // const {post, view} = props
    const post = props.post
    const view = props.view

    function handlePostLikeClick() {
        try {
            toggleLikePost(window.sessionUserId, post.id)

            if (view === 'saved') {
                const saved = retrieveSavedPosts(window.sessionUserId)

                props.onSetSaved(saved)

                return
            }

            props.onSetTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    function handlePostDeleteClick() {
        try {
            const confirmed = confirm('You want to delete this post?')

            if(confirmed)
                deletePost(sessionUserId, post.id)
            else return 
            
            if (view === 'saved') {
                const saved = retrieveSavedPosts(window.sessionUserId)

                props.onSetSaved(saved)

                return
            }

            props.onSetTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    function handlePostSaveClick() {
        try {
            toggleSavePost(window.sessionUserId, post.id)

            if (view === 'saved') {
                const saved = retrieveSavedPosts(window.sessionUserId)

                props.onSetSaved(saved)

                return
            }

            props.onSetTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    return <article key={post.id} className="post">
        <h3>{post.author.name}</h3>

        <img className="post-image"
            src={post.image}
            alt={post.imageDescription}
            title={post.imageDescription} />

        <p>{post.text}</p>

        <Button onClick={handlePostLikeClick}>{(post.liked ? '❤️' : '🩶') + ' ' + post.likes.length + ' likes'}</Button>

        <Button onClick={handlePostSaveClick}>{(post.saved ? '⭐️' : '✩')}</Button>

        {post.author.id === sessionUserId ? <Button onClick={handlePostDeleteClick}>Delete</Button> : null}
    </article>
}

export default Post