import toggleLikePost from '../logic/toggleLikePost'
import deletePost from '../logic/deletePost'
import toggleSavePost from '../logic/toggleSavePost'
import getLoggedInUserId from '../logic/getLoggedInUserId'

import Button from '../library/Button'

function Post(props) {
    console.log('Post')

    const post = props.post

    function handleLikeClick() {
        try {
            toggleLikePost(post.id, error => {
                if (error) {
                    props.onError(error)

                    return
                }

                props.onLikeToggled()
            })
        } catch (error) {
            props.onError(error)
        }
    }

    function handleDeleteClick() {
        const confirmed = confirm('Are you sure you want to delete post?')

        if (confirmed)
            try {
                deletePost(post.id, error => {
                    if (error) {
                        props.onError(error)

                        return
                    }

                    props.onDeleted()
                })
            } catch (error) {
                props.onError(error)
            }
        }

        function handleSaveClick() {
            try {
                toggleSavePost(post.id, error => {
                    if (error) {
                        props.onError(error)

                        return
                    }

                    props.onSaveToggled()
                })
            } catch (error) {
                props.onError(error)
            }
        }

        return <article className=" flex flex-col p-[.5rem] hover:bg-[skyblue]">
            <h3 className='self-start'>{post.author.name}</h3>

            <img className="max-w-[300px] "
                src={post.image}
                alt={post.imageDescription}
                title={post.imageDescription} />

            <p>{post.text}</p>

            <div className='flex'>
                <Button onClick={handleLikeClick} title={post.liked ? 'Unlike' : 'Like'} aria-label={post.liked ? 'Unlike' : 'Like'}>{(post.liked ? '😍' : '😒') + ' ' + post.likes.length + ' likes'}</Button>

                <Button onClick={handleSaveClick} title={post.liked ? 'Unsave' : 'Save'} aria-label={post.saved ? 'Unsave' : 'Save'}>{(post.saved ? '⭐' : '✡️')}</Button>

                {post.author.id === getLoggedInUserId() ? <Button title="Delete" aria-label="Delete" onClick={handleDeleteClick}>🚮</Button> : null}
            </div>
        </article>
}

export default Post