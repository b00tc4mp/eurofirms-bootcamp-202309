function Home(props) {
    const viewState = React.useState(null)
    const view = viewState[0]
    const setView = viewState[1]

    let name = null

    try {
        const user = retrieveUser(loggedInEmail)

        name = user.name
    } catch (error) {
        alert(error.message)
    }

    let post = null

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

    function handleCancelNewPost() {
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

            props.onPostClick()

            setView(null);
    
        } catch (error) {
            alert(error.message)
        }

    }

    return <div>
            <header className="header" aria-label="Header">
                <h1>Home</h1>
                <span id="user-name-span" aria-label="User name">{name}</span>
                <button id="new-post-button" title="New post" aria-label="New post" className="button" onClick={handleNewPostClick}>+</button>
                <button id="logout-button" className="button" onClick = {handleLogoutClick}>Logout</button>
            </header>

            {view === 'new-post' ? 
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
                        <button id="cancel-new-post-button" className="button" onClick={handleCancelNewPost}>Cancel</button>
                    </form>
                </div> : null}

    { posts !== null ?
            <div id="posts-list" aria-label="Posts list" className="view">

                {posts.map(function (post, index) {
                    const liked = post.likes.includes(loggedInEmail)

                    return <article key = {index} className = "articles">
                        <h3>{post.author}</h3>
                        <img className = "post-image" src={post.image} alt={post.newImageDescription} />
                        <p>{post.text}</p>
                        <button>{(liked ? '😍' : '😒') + ' ' + post.likes.length + 'Likes'}</button>
                    </article>
                })}

            </div> : null}
        </div>
    
}
