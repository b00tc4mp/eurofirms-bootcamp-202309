function Home() {
    return <div id="home-view">
        <header className="header">
            <h1>Home</h1>
            <span id="user-name-span">Hello World</span>
            <button id="new-post-button" title="New post" aria-label="New post">+</button>
            <button id="logout-button">Logout</button>
        </header>


        <div id="new-post-panel" className="panel-lightgreen">
            <h2>Create post</h2>

            <form id="new-post-form" className="form">
                <label htmlFor="image-input">Image</label>
                <input type="url" id="image-input"></input>

                <label htmlFor="image-description-input">Image description</label>
                <input type="text" id="image-description-input"></input>

                <label htmlFor="text-input">Text</label>
                <input type="text" id="text-input"></input>

                <button type="submit">Post</button>
                <button id="cancel-new-post-button">Cancel</button>
            </form>
        </div>



        <div id="posts-list">
        </div>
    </div>

}
