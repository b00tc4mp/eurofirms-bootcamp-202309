function Home(props) {

    const viewState = React.useState(null)
    const view = viewState[0]
    const setView = viewState[1]

    const settingsViewState = React.useState(null)
    const settingsView = settingsViewState[0]
    const setSettingsView = settingsViewState[1]

    const timestampState = React.useState(null)
    const setTimestamp = timestampState[1]

    const savedState = React.useState(null)
    const saved = savedState[0]
    const setSaved = savedState[1]

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

    function handleSettingsClick(event) {
        event.preventDefault();

        setView('settings');
    }

    function handleChangeEmailClick() {
        setSettingsView('change-email')
    }

    function handleChangeEmailCancelClick() {
        setSettingsView(null)
    }

    function handleChangeEmailSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const newEmail = emailInput.value
        const password = passwordInput.value

        try {
            changeEmail(sessionUserId, newEmail, password)

            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }


    function handleChangePasswordClick() {
        setSettingsView('change-password')
    }

    function handleChangePasswordCancelClick() {
        setSettingsView(null)
    }

    function handleChangePasswordSubmit(event) {
        event.preventDefault()

        const oldPasswordInput = event.target.querySelector('#Old-password-input')
        const newPasswordInput = event.target.querySelector('#New-password-input')
        const repeatPasswordInput = event.target.querySelector('#Repeat-password-input')

        const oldPassword = oldPasswordInput.value
        const newPassword = newPasswordInput.value
        const repeatNewPassword = repeatPasswordInput.value

        try {
            changePassword(sessionUserId, oldPassword, newPassword, repeatNewPassword)

            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
        <header className="header" aria-label="Header">
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
                <button className="button" onClick={handleNewPostCancelClick}>Cancel</button>
            </form>
        </div> : null}

        {(view === null || view === 'new-post') && posts !== null ? <div aria-label="Posts list" className="view">
            {posts.map(function (post) {
                function handleBeforePostLikeClick() {
                    handlePostLikeClick(post.id)
                }

                function handleBeforePostDeleteClick() {
                    const confirmed = confirm('Delete post?')

                    if (confirmed)
                        handlePostDeleteClick(post.id)
                }

                function handleBeforePostSaveClick() {
                    handlePostSaveClick(post.id)
                }

                return <article key={post.id} className="post">
                    <h3>{post.author.name}</h3>

                    <img className="post-image"
                        src={post.image}
                        alt={post.imageDescription}
                        title={post.imageDescription} />

                    <p>{post.text}</p>

                    <button className="button" onClick={handleBeforePostLikeClick}>{(post.liked ? '❤️' : '🩶') + ' ' + post.likes.length + ' likes'}</button>

                    <button title="Save" aria-label="Save" className="button" onClick={handleBeforePostSaveClick}>{(post.saved ? '⭐️' : '✩')}</button>

                    {post.author.id === sessionUserId ? <button title="Delete" aria-label="Delete" className="button" onClick={handleBeforePostDeleteClick}>Delete</button> : null}
                </article>
            })}
        </div> : null}

        {view === 'saved' ? <div aria-label="Saved list" className="view">
            {saved.map(function (post) {
                function handleBeforePostLikeClick() {
                    handlePostLikeClick(post.id)
                }

                function handleBeforePostDeleteClick() {
                    const confirmed = confirm('Delete post?')

                    if (confirmed)
                        handlePostDeleteClick(post.id)
                }

                function handleBeforePostSaveClick() {
                    handlePostSaveClick(post.id)
                }

                return <article key={post.id} className="post">
                    <h3>{post.author.name}</h3>

                    <img className="post-image"
                        src={post.image}
                        alt={post.imageDescription}
                        title={post.imageDescription} />

                    <p>{post.text}</p>

                    <button className="button" onClick={handleBeforePostLikeClick}>{(post.liked ? '❤️' : '🩶') + ' ' + post.likes.length + ' likes'}</button>

                    <button title="Unsave" aria-label="Unsave" className="button" onClick={handleBeforePostSaveClick}>{(post.saved ? '⭐️' : '✩')}</button>

                    {post.author.id === sessionUserId ? <button title="Delete" aria-label="Delete" className="button" onClick={handleBeforePostDeleteClick}>Delete</button> : null}
                </article>
            })}
        </div> : null}

        {view === 'settings' ? <div aria-label="Settings" className="view">
            <div className="header" aria-label="Header">
                <button title="Change email" aria-label="Change email" className="button" onClick={handleChangeEmailClick}>Change your email address</button>
                <button title="Change password" aria-label="Change password" className="button" onClick={handleChangePasswordClick}>Change your password</button>
            </div>

            {settingsView === 'change-email' ? <div className="view">
                <h2>Change your email</h2>

                <form className="form" onSubmit={handleChangeEmailSubmit}>
                    <label htmlFor="email-input">E-mail</label>
                    <input type="email" id="email-input" title="E-mail"></input>

                    <label htmlFor="password-input">Password</label>
                    <input type="password" id="password-input" title="Password"></input>


                    <button type="submit" className="button">Change</button>
                    <button className="button" onClick={handleChangeEmailCancelClick}>Cancel</button>
                </form>
            </div> : null}

            {settingsView === 'change-password' ? <div className="view">
                <h2>Change your password</h2>

                <form className="form" onSubmit={handleChangePasswordSubmit}>

                    <label htmlFor="Old-password-input">Old password</label>
                    <input type="password" id="Old-password-input" title="Password"></input>

                    <label htmlFor="New-password-input">New password</label>
                    <input type="password" id="New-password-input" title="Password"></input>

                    <label htmlFor="Repeat-password-input">Repeat new password</label>
                    <input type="password" id="Repeat-password-input" title="Password"></input>

                    <button type="submit" className="button">Change</button>
                    <button className="button" onClick={handleChangePasswordCancelClick}>Cancel</button>
                </form>
            </div> : null}

        </div> : null}

        <footer className="footer" aria-label="Footter">
            <a onClick={handleHomeClick}>Home</a>
            <a onClick={handleSettingsClick}>Settings</a>
            <a onClick={handleSavedClick}>Saved</a>
        </footer>
    </div>
}