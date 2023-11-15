function Home(props) {

    const viewState = React.useState(null)
    const view = viewState[0]
    const setView = viewState[1]

    const timestampState = React.useState(null)
    const setTimestamp = timestampState[1]

    const savedState = React.useState(null)
    const saved = savedState[0]
    const setSaved = savedState[1]
    // TODO const [saved, setSaved] = React.useState(null)

    let name = null

    try {
        const user = retrieveUser(sessionUserId)

        name = user.name
    } catch (error) {
        alert(error.message)
    }

    let posts = null

    try {
        posts = retrievePosts(sessionUserId)
    } catch (error) {
        alert(error.message)
    }

    function handleLogoutClick() {
        sessionUserId = null

        props.onLogout()
    }

    function handleNewPostClick() {
        setView('new-post')
    }

    function handleNewPostCancelClick() {
        setView(null)
    }

    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector('#image-input')
        const imageDescriptionInput = event.target.querySelector('#image-description-input')
        const textInput = event.target.querySelector('#text-input')

        const image = imageInput.value
        const imageDescription = imageDescriptionInput.value
        const text = textInput.value

        try {
            createNewPost(sessionUserId, image, imageDescription, text)

            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }

    function handlePostLikeClick(postId) {
        try {
            toggleLikePost(sessionUserId, postId)

            if (view === 'saved') {
                const saved = retrieveSavedPosts(sessionUserId)

                setSaved(saved)

                return
            }

            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    function handlePostDeleteClick(postId) {
        try {
            deletePost(sessionUserId, postId)

            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    function handlePostSaveClick(postId) {
        try {
            toggleSavePost(sessionUserId, postId)

            if (view === 'saved') {
                const saved = retrieveSavedPosts(sessionUserId)

                setSaved(saved)

                return
            }

            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    function handleSavedClick(event) {
        event.preventDefault()

        try {
            const saved = retrieveSavedPosts(sessionUserId)

            setSaved(saved)
            setView('saved')
        } catch (error) {
            alert(error.message)
        }
    }

    function handleHomeClick(event) {
        event.preventDefault()

        setView(null)
    }


    return <div>
        <header className="header" aria-label="Header">
        <h1><a href="" onClick={handleHomeClick}>Home</a></h1>
            <span id="user-name-span" aria-label="User name">{name}</span>
            <button id="new-post-button" title="New post" aria-label="New post" className="button" onClick={handleNewPostClick}>+</button>
            <a href="" onClick={handleSavedClick}>Saved</a>
            <button id="logout-button" className="button" onClick={handleLogoutClick}>Logout</button>
        </header>

        {view === 'new-post' ?
            <div className="view">
                <h2>New post</h2>

                <form id="new-post-form" className="form" onSubmit={handleNewPostSubmit}>
                    <label htmlFor="image-input" className="label">Image</label>
                    <input type="url" id="image-input" className="input" required />

                    <label htmlFor="image-description-input" className="label">Image description</label>
                    <input type="text" id="image-description-input" className="input" required />

                    <label htmlFor="text-input" className="label">Text</label>
                    <input type="text" id="text-input" className="input" required />

                    <button type="submit" className="button">Post</button>
                    <button id="cancel-new-post-button" className="button" onClick={handleNewPostCancelClick}>Cancel</button>
                </form>
            </div> : null}

            {(view === null || view === 'new-post') && posts !== null ? <div aria-label="Posts list" className="view">
            {posts.map(function (post) {
                function handleBeforePostLikeClick() {
                    handlePostLikeClick(post.id)
                }

                function handleBeforePostDeleteClick() {
                    const confirmed = confirm('Are you sure you want to delete the post?')

                    if (confirmed)
                        handlePostDeleteClick(post.id)
                }

                function handleBeforePostSaveClick() {
                    handlePostSaveClick(post.id)
                }

                return <article key={post.id} className='post'>
                    <h3>{post.author.name}</h3>

                    <img className="post-image" src={post.image} alt={post.imageDescription} title={post.imageDescription} />

                    <p>{post.text}</p>

                    <button className='button' onClick={handleBeforePostLikeClick}>{(post.liked ? '😍' : '😒') + ' ' + post.likes.length + 'likes'}</button>

                    <button className="button" onClick={handleBeforePostSaveClick}>{(post.saved ? '⭐' : '✡️')}</button>

                    {post.author.id === sessionUserId ? <button className="button" onClick={handleBeforePostDeleteClick}>Delete post</button> : null}

                </article>

            })}

        </div> : null}

        {view === 'saved' ? <div aria-label="Saved list" className="view">
            {saved.map(function (post) {
                function handleBeforePostLikeClick() {
                    handlePostLikeClick(post.id)
                }

                function handleBeforePostDeleteClick() {
                    const confirmed = confirm('Are you sure you want to delete the post?')

                    if (confirmed)
                        handlePostDeleteClick(post.id)
                }

                function handleBeforePostSaveClick() {
                    handlePostSaveClick(post.id)
                }

                return <article key={post.id} className='post'>
                    <h3>{post.author.name}</h3>

                    <img className="post-image" src={post.image} alt={post.imageDescription} title={post.imageDescription} />

                    <p>{post.text}</p>

                    <button className='button' onClick={handleBeforePostLikeClick}>{(post.liked ? '😍' : '😒') + ' ' + post.likes.length + 'likes'}</button>

                    <button className="button" onClick={handleBeforePostSaveClick}>{(post.saved ? '⭐' : '✡️')}</button>

                    {post.author.id === sessionUserId ? <button className="button" onClick={handleBeforePostDeleteClick}>Delete post</button> : null}

                </article>

            })}

        </div> : null}
    </div>
}