function Home() {
    return <div>
        <header className="header" aria-label="Header">
            <h1>Home</h1>
            <span id="user-name-span" aria-label="User name">Hello World</span>
            <button id="new-post-button" title="New post" aria-label="New post" className="button">+</button>
            <button id="logout-button" className="button">Logout</button>
        </header>

        <div id="new-post-panel" className="view">
            <h2>New post</h2>

            <form id="new-post-form" className="form">
                <label htmlFor="image-input" className="label">Image</label>
                <input type="url" id="image-input" className="input" required></input>

                <label htmlFor="image-description-input" className="label">Image description</label>
                <input type="text" id="image-description-input" className="input" required></input>

                <label htmlFor="text-input" className="label">Text</label>
                <input type="text" id="text-input" className="input" required></input>

                <button type="submit" className="button">Post</button>
                <button id="cancel-new-post-button" className="button">Cancel</button>
            </form>
        </div>

        <div id="posts-list" aria-label="Posts list" class="view">
        </div>
    </div>
}

