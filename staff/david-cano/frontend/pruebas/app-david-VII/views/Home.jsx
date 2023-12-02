function Home(props) {

    const viewState = React.useState('posts-list')
    const view = viewState[0]
    const setView = viewState[1]

    const timestampState = React.useState(null)
    const setTimestamp = timestampState[1]

    const viewStateNewPost = React.useState(null)
    const viewNewPost = viewStateNewPost[0]
    const setViewNewPost = viewStateNewPost[1]


    let name = null

    try {
        const user = retrieveUser(sessionUserId)

        name = user.name
    } catch (error) {
        alert(error.message)
    }

    let posts = null

    try {
        posts = view === 'posts-list' ? retrievePosts(sessionUserId) : null
    } catch (error) {
        alert(error.message)
    }

    let savePosts = null

    try {
        savePosts = view === 'save-posts-list' ? retrieveSavePosts(sessionUserId) : null
    } catch (error) {
        alert(error.message)
    }

    function handleLogoutClick() {
        sessionUserId = null

        props.onLogout()
    }

    function handleNewPostClick() {
        setViewNewPost('new-post')
    }

    function handleShowSavePostsList() {
        setView('save-posts-list')
    }

    function handleShowPostsList() {
        setView('posts-list')
    }

    function handleNewPostCancelClick() {
        setViewNewPost(null)
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

            setViewNewPost(null)
        } catch (error) {
            alert(error.message)
        }
    }

    function handlePostLikeClick(postId) {
        try {
            toggleLikePost(sessionUserId, postId)

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

            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
        <header className="header" aria-label="Header">
            <h1>Home</h1>
            <span id="user-name-span" aria-label="User name">{name}</span>

            <button id="new-post-button" title="New post" aria-label="New post" className="button" onClick={handleNewPostClick}>+</button>

            {view === 'posts-list' ? <button title="Save posts list" aria-label="Save posts list" className="button" onClick={handleShowSavePostsList}>Save Posts List</button> : null }

            {view === 'save-posts-list' ? <button id="new-post-button" title="Posts list" aria-label="Posts list" className="button" onClick={handleShowPostsList}>Posts List</button> : null }
            
            <button id="logout-button" className="button" onClick={handleLogoutClick}>Logout</button>
        </header>

        {viewNewPost === 'new-post' ?
            <div id="new-post-panel" className="view">
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

        {savePosts !== null && view === 'save-posts-list' ?
            <div id="new-post-panel" className="view">
                <h2>Save Post List</h2>

                <div id="save-posts-list" aria-label="Save Posts list" className="view">
                    {savePosts.toReversed().map(function (post) {
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

                </div>

            </div> : null}

        {posts !== null && view === 'posts-list' ? <div id="posts-list" aria-label="Posts list" className="view">
            {posts.toReversed().map(function (post) {
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

