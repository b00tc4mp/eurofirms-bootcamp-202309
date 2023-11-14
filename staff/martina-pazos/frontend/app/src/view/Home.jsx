//esto es lo que aparece en la Home de la APP. En el header (cabecera), esta hola mundo, boton para nuevo post (+), boton de logout, nombre de los usuarios que esta usando la app en ese momento, los post saved o favoritos.Aceptan entradas arbitrarias (llamadas "props") y devuelven elementos de React que describen lo que debería aparecer en la pantalla. Handle en inglés significa manejar.
//El método map() es un método iterativo.Llama a una función callbackFn proporcionada una vez para cada elemento de una matriz y construye una nueva matriz a partir de los resultados. Recordemos el includes:El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

import { useState } from 'react'
import retrieveUser from "../logic/retrieveUser"
import retrievePosts from "../logic/retrievePost"

function Home(props) {
    console.log('Home')

    //son los estados
    const [view, setView] = useState(null)

    const [timestamp, setTimestamp] = useState(null)

    const [saved, setSaved] = useState(null)


    let name = null


    //La construcción try... catch permite manejar errores de tiempo de ejecución. Literalmente permite “intentar (try)” ejecutar el código y “atrapar (catch)” errores que pueden ocurrir en él.


    //sessionUserId (es el usuario conectado en ese momento)

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


    // maneja el boton de logout

    function handleLogoutClick() {
        //sessionUserId = null

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
            //createNewPost(sessionUserId, image, imageDescription, text)

            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }

    //maneja los likes a un post

    function handlePostLikeClick(postId) {
        try {
            //toggleLikePost(sessionUserId, postId)


            if (view === 'saved') {
                // const saved = retrieveSavedPosts(sessionUserId)

                // setSaved(saved)

                return

            }

            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    // maneja los eleminación de los post

    function handlePostDeleteClick(postId) {
        try {
            //deletePost(sessionUserId, postId)

            if (view === 'saved') {

                // const saved = retrieveSavedPosts(sessionUserId)


                //setSaved(saved)

                return
            }
            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    function handlePostSaveClick(postId) {
        try {
            //toggleSavePost(sessionUserId, postId)
            if (view === 'saved') {
                //const saved = retrieveSavedPosts(sessionUserId)

                //setSaved(saved)

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
            // const saved = retrieveSavedPosts(sessionUserId)

            // setSaved(saved)
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
            <span aria-label="User name">{name}</span>
            <button title="New post" aria-label="New post" className="button" onClick={handleNewPostClick}>+</button>
            <a href="" onClick={handleSavedClick}>Saved</a>
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

        {(view === null || view === 'new-post') && posts !== null ? <div aria-label="Posts list" className=" view">
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

                    <button className="button" onClick={handleBeforePostSaveClick}>{(post.saved ? '⭐️' : '✩')} </button>
                    {post.author.id === sessionUserId ? <button className="button" onClick={handleBeforePostDeleteClick}>Delete</button> : null}

                </article>
            })}
        </div> : null}

        {
            view === 'saved' ? <div aria-label="Saved list" className="view">
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

                        <button className="button" onClick={handleBeforePostSaveClick}>{(post.saved ? '⭐️' : '✩')}</button>

                        {post.author.id === sessionUserId ? <button className="button" onClick={handleBeforePostDeleteClick}>Delete</button> : null}
                    </article>
                })}
            </div> : null
        }
    </div >
}

export default Home
