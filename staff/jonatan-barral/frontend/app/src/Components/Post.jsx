import Button from "../components/Button"

function Post(props) {
    const post = props.post

    function handleLikeClick() {
        props.onLikeClick(post.id)
    }

    function handleDeleteClick() {
        const confirmed = confirm('Delete post?')

        if (confirmed)
            props.onDeleteClick(post.id)
    }

    function handleSaveClick() {
        props.onSaveClick(post.id)
    }

    const saveButtonTitle = post.saved ? 'Unsave post' : 'Save post'

    return <article key={post.id} className="post">
        <h3>{post.author.name}</h3>

        <img className="post-image"
            src={post.image}
            alt={post.imageDescription}
            title={post.imageDescription} />

        <p>{post.text}</p>

        <Button title="Like" aria-label="Like" onClick={handleLikeClick}>{(post.liked ? '❤️' : '🩶') + ' ' + post.likes.length + ' likes'}</Button>

        <Button title={saveButtonTitle} aria-label={saveButtonTitle} onClick={handleSaveClick}>{(post.saved ? '⭐️' : '✩')}</Button>

        {post.author.id === window.sessionUserId ? <Button onClick={handleDeleteClick}>Delete</Button> : null}
    </article>
}

export default Post