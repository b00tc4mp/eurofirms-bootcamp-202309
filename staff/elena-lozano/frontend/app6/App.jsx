function App(){
    return <div id="home-view">
    <header class="header" aria-label="Header">
        <h1>Home</h1>
        <span id="user-name-span" aria-label="User name">Hello World</span>
        <button id="new-post-button" title="New post" aria-label="New post" class="button">+</button>
        <button id="logout-button" class="button">Logout</button>
    </header>

    <div id="new-post-panel" class="view">
        <h2>New post</h2>

        <form id="new-post-form" class="form">
            <label for="image-input" class="label">Image</label>
            <input type="url" id="image-input" class="input" required />

            <label for="image-description-input" class="label">Image description</label>
            <input type="text" id="image-description-input" class="input" required />

            <label for="text-input" class="label">Text</label>
            <input type="text" id="text-input" class="input" required />

            <button type="submit" class="button">Post</button>
            <button id="cancel-new-post-button" class="button">Cancel</button>
        </form>
    </div>

    <div id="posts-list" aria-label="Posts list" class="view">
        <article>
            <h3>peter@pan.com</h3>
            <img class="post-image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
                alt="" />
            <p>Smile!</p>
        </article>

        <article>
            <h3>wendy@darling.com</h3>
            <img class="post-image"
                src="https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-1240w/public/sites/nbcutelemundo/files/images/article/2014/08/28/hello_kitty_140920568644_4.jpg"
                alt="" />
            <p>Hello, Kitty!</p>
        </article> 
    </div>
</div>
}