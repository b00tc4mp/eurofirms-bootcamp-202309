//esto es lo que aparece en la Home de la APP. En el header (cabecera), esta hola mundo, boton para nuevo post (+), boton de logout, nombre de los usuarios que esta usando la app en ese momento.Aceptan entradas arbitrarias (llamadas "props") y devuelven elementos de React que describen lo que debería aparecer en la pantalla. Handle en inglés significa manejar.
//El método map() es un método iterativo.Llama a una función callbackFn proporcionada una vez para cada elemento de una matriz y construye una nueva matriz a partir de los resultados. Recordemos el includes:El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.



function Home(props) {
    console.log('Home')

    const viewState = React.useState(null)
    const view = viewState[0]
    const setView = viewState[1]

    const timestampState = React.useState(null)
    //const timestamp = timestampState[0]
    const setTimestamp = timestampState[1]

    let name = null


    //La construcción try... catch permite manejar errores de tiempo de ejecución. Literalmente permite “intentar (try)” ejecutar el código y “atrapar (catch)” errores que pueden ocurrir en él.

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


    // maneja el boton de logout

    function handleLogoutClick() {
        loggedInEmail = null

        props.onLogout()
    }

    //manuea el botón de publicar un nuevo post

    function handleNewPostClick() {
        setView('new-post')
    }

    //manueja el boton para cancelar la publicación de un post

    function handleNewPostCancelClick() {
        setView(null)
    }


    // es la mecanización para publicar un post
    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector('#image-input')
        const imageDescriptionInput = event.target.querySelector('#image-description-input')
        const textInput = event.target.querySelector('#text-input')

        const image = imageInput.value
        const imageDescription = imageDescriptionInput.value
        const text = textInput.value

        try {
            createNewPost(loggedInEmail, image, imageDescription, text)

            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }

    //maneja los likes a un post

    function handlePostLikeClick(postId) {
        try {
            toggleLikePost(loggedInEmail, postId)

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
                <button className="button" onClick={handleNewPostCancelClick}>Cancel</button>
            </form>
        </div> : null}

        {posts !== null ? <div aria-label="Posts list" className="view">
            {posts.toReversed().map(function (post) {
                const liked = post.likes.includes(loggedInEmail)

                function handleBeforePostLikeClick() {
                    handlePostLikeClick(post.id)
                }

                return <article key={post.id} className="post">
                    <h3>{post.author}</h3>
                    <img className="post-image"
                        src={post.image}
                        alt={post.imageDescription}
                        title={post.imageDescription} />
                    <p>{post.text}</p>
                    <button className="button" onClick={handleBeforePostLikeClick}>{(liked ? '❤️' : '🩶') + ' ' + post.likes.length + ' likes'}</button>
                </article>
            })}
        </div> : null}
    </div>
}


