import toggleLikePost from '../logic/toggleLikePost'
import deletePost from '../logic/deletePost'
import toggleSavePost from '../logic/toggleSavePost'

import Button from './Button'
import { JWTError } from '../utils/errors'

function Post(props) {
    console.log('Post')

    const post = props.post

    function handleLikeClick() {
        try {
            toggleLikePost(post.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onLikeToggled()
            })
        } catch (error) {
            if (error instanceof JWTError)
                props.onError(error)
            else
                alert(error.message)
        }
    }

    function handleDeleteClick() {
        const confirmed = confirm('Delete post?')

        if (confirmed)
            try {
                deletePost(post.id, error => {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    props.onDeleted()
                })
            } catch (error) {
                if (error instanceof JWTError)
                    props.onError(error)
                else
                    alert(error.message)
            }
    }

    function handleSaveClick() {
        try {
            toggleSavePost(post.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onSaveToggled()
            })
        } catch (error) {
            if (error instanceof JWTError)
                props.onError(error)
            else
                alert(error.message)
        }
    }

    return <article className="flex flex-col p-[.5rem] bg-[ghostwhite] hover:bg-[lightgray]">
        <h3 className="self-start">{post.author.name}</h3>

        <img className="max-w-[300px]"
            src={post.image}
            alt={post.imageDescription}
            title={post.imageDescription} />

        <p>{post.text}</p>

        <div className="flex">
            <Button onClick={handleLikeClick} title={post.liked ? 'Unlike' : 'Like'} aria-label={post.liked ? 'Unlike' : 'Like'}>{(post.liked ? '❤️' : '🩶') + ' ' + post.likes.length + ' likes'}</Button>

            <Button onClick={handleSaveClick} title={post.saved ? 'Unsave' : 'sSave'} aria-label={post.saved ? 'Unsave' : 'Save'}>{(post.saved ? '⭐️' : '✩')}</Button>

            {post.author.id === sessionStorage.token ? <Button title="Delete" aria-label="Delete" onClick={handleDeleteClick}>🗑️</Button> : null}
        </div>
    </article>
}

export default Post