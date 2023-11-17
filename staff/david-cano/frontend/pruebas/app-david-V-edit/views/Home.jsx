function Home(props) {
    console.log('Home')

    const viewState = React.useState(null)
    const view = viewState[0]
    const setView = viewState[1]

    const timestampState = React.useState(null)
    //const timestamp = timestampState[0]
    const setTimestamp = timestampState[1]

    let name = null

    try {
        const user = retrieveUser(loggedInEmail)

        name = user.name
    } catch (error) {
        alert(error.message)
    }

    let posts = null

    try {
        posts = retrievePosts(loggedInEmail)
    } catch (error) {
        alert(error.message)
    }

    function handleLogoutClick() {
        loggedInEmail = null

        props.onLogoutClick()
    }

    function handleNewPostClick() {
        setView('new-post');
    }

    function handleEditPostClick() {
        setView('edit-post');
    }

    function handleCancelNewPost() {
        setView(null);
    }

    function handleCancelSavePost() {
        setView(null);
    }


    function handleNewPostSubmit(event) {
        event.preventDefault()

        const newImageInput = event.target.querySelector('#image-input')
        const newImageDescriptionInput = event.target.querySelector('#image-description-input')
        const newTextInput = event.target.querySelector('#text-input')

        const newImage = newImageInput.value;
        const newImageDescription = newImageDescriptionInput.value;
        const newText = newTextInput.value;

        try {
            createNewPost(loggedInEmail, newImage, newImageDescription, newText)

            setView(null);
        } catch (error) {
            alert(error.message)
        }
    }

    function handleEditPostSubmit(event) {
        event.preventDefault()

        const ImageInput = event.target.querySelector('#image-input')
        const ImageDescriptionInput = event.target.querySelector('#image-description-input')
        const TextInput = event.target.querySelector('#text-input')
        // TODO pass to camelCase
        const Image = ImageInput.value;
        const ImageDescription = ImageDescriptionInput.value;
        const Text = TextInput.value;
        try {
            editPost(loggedInEmail, Image, ImageDescription, Text)

            setView(null);
        } catch (error) {
            alert(error.message)
        }
    }

    function handlePostLikeClick(postIndex) {
        try {
            toggleLikePost(loggedInEmail, postIndex)

            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    function handleDeletePostClick(postIndex) {
        try {
            deletePost(postIndex, loggedInEmail)

            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
        <header className="header" aria-label="Header">
            <h1>Home</h1>
            <span aria-label="User name">{name}</span>
            <button title="New post" aria-label="New post" className="button" onClick={handleNewPostClick}>+</button>
            <button className="button" onClick={handleLogoutClick}>Logout</button>
        </header>

        {view === 'new-post' ? <div className="view">
            <h2>New post</h2>

            <form className="form" onSubmit={handleNewPostSubmit}>
                <label htmlFor="image-input" className="label">Image</label>
                <input type="url" id="image-input" className="input" required />

                <label htmlFor="image-description-input" className="label">Image description</label>
                <input type="text" id="image-description-input" className="input" required />

                <label htmlFor="text-input" className="label">Text</label>
                <input type="text" id="text-input" className="input" required />

                <button type="submit" className="button">Post</button>
                <button id="cancel-new-post-button" className="button" onClick={handleCancelNewPost}>Cancel</button>
            </form>
        </div> : null}

        {view === 'edit-post' ? <div className="view">
            <h2>Edit post</h2>

            <form className="form" onSubmit={handleEditPostSubmit}>
                <label htmlFor="image-input" className="label">Image</label>
                <input type="url" id="image-input" className="input" required />

                <label htmlFor="image-description-input" className="label">Image description</label>
                <input type="text" id="image-description-input" className="input" required />

                <label htmlFor="text-input" className="label">Text</label>
                <input type="text" id="text-input" className="input" required />

                <button type="submit" className="button">Save Post</button>
                <button id="cancel-new-post-button" className="button" onClick={handleCancelSavePost}>Cancel</button>
            </form>
        </div> : null}


        {posts !== null ? <div aria-label="Posts list" className="view">

            {posts.toReversed().map(function (post, index, posts) {
                const liked = post.likes.includes(loggedInEmail)

                function handleBeforePostLikeClick() {
                    handlePostLikeClick(posts.length - 1 - index)
                }

                function handleBeforeDeletePostClick() {
                    handleDeletePostClick(posts.length - 1 - index)
                }

                return <article key={index} className="articles">
                    <h3>{post.author}</h3>
                    <img className="post-image" src={post.image} alt={post.newImageDescription} />
                    <p>{post.text}</p>

                    <div className='button-article'>
                        <button className='button' onClick={handleBeforePostLikeClick}>{(liked ? '😍' : '😒') + ' ' + post.likes.length + 'Likes'}</button>
                        {post.author === loggedInEmail ? (
                            <>
                                <button className='button' onClick={handleBeforeDeletePostClick}>
                                    Delete Post
                                </button>
                                <button className='button' onClick={handleEditPostClick}>
                                    Edit Post
                                </button>
                            </>
                        ) : null}
                    </div>

                </article>
            })}

        </div> : null}
    </div>

}
