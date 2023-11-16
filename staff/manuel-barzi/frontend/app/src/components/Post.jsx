import Button from "./Button"

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

    return <article key={post.id} className="post">
        <h3>{post.author.name}</h3>

        <img className="post-image"
            src={post.image}
            alt={post.imageDescription}
            title={post.imageDescription} />

        <p>{post.text}</p>

        <Button onClick={handleLikeClick}>{(post.liked ? '❤️' : '🩶') + ' ' + post.likes.length + ' likes'}</Button>

        <Button onClick={handleSaveClick}>{(post.saved ? '⭐️' : '✩')}</Button>

        {post.author.id === window.sessionUserId ? <Button onClick={handleDeleteClick}>Delete</Button> : null}
    </article>
}

export default Post