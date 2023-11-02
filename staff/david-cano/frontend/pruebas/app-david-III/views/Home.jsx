function Home(props) {
    const viewState = React.useState(false)
    const view = viewState[0]
    const setView = viewState[1]

    function handleNewPostClick() {
        setView(true);
    }

    function handleCancelNewPost() {
        setView(false);
    }

    function handleLogoutClick(event) {
        event.preventDefault()
    
        props.onLogoutClick()
    }

    function handleNewPostSubmit(event) {
        event.preventDefault()

        try {
            const newImageInput = event.target.querySelector('#image-input')
            const newImageDescriptionInput = event.target.querySelector('#image-description-input')
            const newTextInput = event.target.querySelector('#text-input')
    
            const newImage = newImageInput.value;
            const newImageDescription = newImageDescriptionInput.value;
            const newText = newTextInput.value;
    
            createNewPost(loggedInEmail, newImage, newImageDescription, newText)
    
            props.onPostClick()

            setView(false);
    
            console.log(newImage, newImageDescription, newText)
        } catch (error) {
            alert(error.message)
        }

       
    }

    return (
        <div>
            <header className="header" aria-label="Header">
                <h1>Home</h1>
                <span id="user-name-span" aria-label="User name">Hello World</span>
                <button id="new-post-button" title="New post" aria-label="New post" className="button" onClick={handleNewPostClick}>+</button>
                <button id="logout-button" className="button" onClick = {handleLogoutClick}>Logout</button>
            </header>

            {view ? (
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
                </div>
            ) : null}

            <div id="posts-list" aria-label="Posts list" className="view">
                <article className ="articles">
                    <h3>peter@pan.com</h3>
                    <img className="post-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" alt="" />
                    <p>Smile!</p>
                </article>

                <article className ="articles">
                    <h3>wendy@darling.com</h3>
                    <img className="post-image" src="https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-1240w/public/sites/nbcutelemundo/files/images/article/2014/08/28/hello_kitty_140920568644_4.jpg" alt="" />
                    <p>Hello, Kitty!</p>
                </article>
            </div>
        </div>
    );
}
