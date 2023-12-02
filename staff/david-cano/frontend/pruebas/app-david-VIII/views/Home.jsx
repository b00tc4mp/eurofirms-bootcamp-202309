function Home(props) {
    // Estado para la vista actual
    const viewState = React.useState(null);  // Estado de React para gestionar la vista actual
    const view = viewState[0];  // Valor actual del estado de la vista
    const setView = viewState[1];  // Función para actualizar el estado de la vista

    // Estado para la marca de tiempo
    const timestampState = React.useState(null);  // Estado de React para gestionar la marca de tiempo
    const setTimestamp = timestampState[1];  // Función para actualizar la marca de tiempo

    // Estado para las publicaciones "guardadas"
    const savedState = React.useState(null);  // Estado de React para gestionar las publicaciones "guardadas"
    const saved = savedState[0];  // Valor actual del estado de las publicaciones "guardadas"
    const setSaved = savedState[1];  // Función para actualizar el estado de las publicaciones "guardadas"
    // TODO const [saved, setSaved] = React.useState(null)

    // Nombre de usuario
    let name = null;

    try {
        const user = retrieveUser(sessionUserId);  // Obtener información del usuario actual
        name = user.name;  // Asignar el nombre del usuario
    } catch (error) {
        alert(error.message);  // Manejar errores, si los hay
    }

    // Publicaciones
    let posts = null;

    try {
        posts = retrievePosts(sessionUserId);  // Obtener las publicaciones del usuario actual
    } catch (error) {
        alert(error.message);  // Manejar errores, si los hay
    }

    // Función para manejar el clic en "Logout"
    function handleLogoutClick() {
        sessionUserId = null;  // Limpiar la sesión del usuario
        props.onLogout();  // Llamar a la función proporcionada al componente como "onLogout"
    }

    // Función para manejar el clic en "New Post"
    function handleNewPostClick() {
        setView('new-post');  // Establecer la vista actual como la creación de una nueva publicación
    }

    // Función para cancelar la creación de una nueva publicación
    function handleNewPostCancelClick() {
        setView(null);  // Restablecer la vista actual a nula
    }

    // Función para manejar el envío de una nueva publicación
    function handleNewPostSubmit(event) {
        event.preventDefault();  // Prevenir el comportamiento predeterminado del formulario

        const imageInput = event.target.querySelector('#image-input');
        const imageDescriptionInput = event.target.querySelector('#image-description-input');
        const textInput = event.target.querySelector('#text-input');

        const image = imageInput.value;
        const imageDescription = imageDescriptionInput.value;
        const text = textInput.value;

        try {
            createNewPost(sessionUserId, image, imageDescription, text);  // Crear una nueva publicación
            setView(null);  // Restablecer la vista actual a nula después de la creación exitosa
        } catch (error) {
            alert(error.message);  // Manejar errores, si los hay
        }
    }

    // Función para manejar el clic en "Like" de una publicación
    function handlePostLikeClick(postId) {
        try {
            toggleLikePost(sessionUserId, postId);  // Alternar el estado de "Me gusta" de una publicación

            if (view === 'saved') {
                const saved = retrieveSavedPosts(sessionUserId);  // Obtener las publicaciones "guardadas" actualizadas
                setSaved(saved);  // Actualizar el estado de las publicaciones "guardadas"
                return;
            }

            setTimestamp(Date.now());  // Actualizar la marca de tiempo para recargar las publicaciones
        } catch (error) {
            alert(error.message);  // Manejar errores, si los hay
        }
    }

    // Función para manejar el clic en "Delete" de una publicación
    function handlePostDeleteClick(postId) {
        try {
            deletePost(sessionUserId, postId);  // Eliminar la publicación
            setTimestamp(Date.now());  // Actualizar la marca de tiempo para recargar las publicaciones
        } catch (error) {
            alert(error.message);  // Manejar errores, si los hay
        }
    }

    // Función para manejar el clic en "Save" de una publicación
    function handlePostSaveClick(postId) {
        try {
            toggleSavePost(sessionUserId, postId);  // Alternar el estado de "Guardar" una publicación

            if (view === 'saved') {
                const saved = retrieveSavedPosts(sessionUserId);  // Obtener las publicaciones "guardadas" actualizadas
                setSaved(saved);  // Actualizar el estado de las publicaciones "guardadas"
                return;
            }

            setTimestamp(Date.now());  // Actualizar la marca de tiempo para recargar las publicaciones
        } catch (error) {
            alert(error.message);  // Manejar errores, si los hay
        }
    }

    // Función para manejar el clic en "Saved" para ver publicaciones guardadas
    function handleSavedClick(event) {
        event.preventDefault();  // Prevenir el comportamiento predeterminado del enlace

        try {
            const saved = retrieveSavedPosts(sessionUserId);  // Obtener las publicaciones "guardadas" del usuario
            setSaved(saved);  // Actualizar el estado de las publicaciones "guardadas"
            setView('saved');  // Cambiar a la vista de publicaciones "guardadas"
        } catch (error) {
            alert(error.message);  // Manejar errores, si los hay
        }
    }

    // Función para manejar el clic en "Home" para regresar a la vista principal
    function handleHomeClick(event) {
        event.preventDefault();  // Prevenir el comportamiento predeterminado del enlace
        setView(null);  // Restablecer la vista actual a nula
    }

    return (
        <div>
            {/* Encabezado de la aplicación */}
            <header className="header" aria-label="Header">
                <h1><a href="" onClick={handleHomeClick}>Home</a></h1>
                <span id="user-name-span" aria-label="User name">{name}</span>
                <button id="new-post-button" title="New post" aria-label="New post" className="button" onClick={handleNewPostClick}>+</button>
                <a href="" onClick={handleSavedClick}>Saved</a>
                <button id="logout-button" className="button" onClick={handleLogoutClick}>Logout</button>
            </header>

            {/* Sección para la creación de una nueva publicación */}
            {view === 'new-post' ?
                <div className="view">
                    <h2>New post</h2>
                    {/* Formulario para la creación de una nueva publicación */}
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

            {/* Sección para mostrar las publicaciones */}
            {(view === null || view === 'new-post') && posts !== null ?
                <div aria-label="Posts list" className="view">
                    {posts.map(function (post) {
                        // Función para manejar el clic en "Like" de una publicación
                        function handleBeforePostLikeClick() {
                            handlePostLikeClick(post.id);
                        }

                        // Función para manejar el clic en "Delete" de una publicación
                        function handleBeforePostDeleteClick() {
                            const confirmed = window.confirm('Are you sure you want to delete the post?');
                            if (confirmed) handlePostDeleteClick(post.id);
                        }

                        // Función para manejar el clic en "Save" de una publicación
                        function handleBeforePostSaveClick() {
                            handlePostSaveClick(post.id);
                        }

                        return (
                            <article key={post.id} className='post'>
                                <h3>{post.author.name}</h3>
                                <img className="post-image" src={post.image} alt={post.imageDescription} title={post.imageDescription} />
                                <p>{post.text}</p>
                                <button className='button' onClick={handleBeforePostLikeClick}>
                                    {(post.liked ? '😍' : '😒') + ' ' + post.likes.length + 'likes'}
                                </button>
                                <button className="button" onClick={handleBeforePostSaveClick}>
                                    {(post.saved ? '⭐' : '✡️')}
                                </button>
                                {post.author.id === sessionUserId ?
                                    <button className="button" onClick={handleBeforePostDeleteClick}>Delete post</button> : null}
                            </article>
                        );
                    })}
                </div> : null}

            {/* Sección para mostrar las publicaciones guardadas */}
            {view === 'saved' ?
                <div aria-label="Saved list" className="view">
                    {saved.map(function (post) {
                        // Función para manejar el clic en "Like" de una publicación guardada
                        function handleBeforePostLikeClick() {
                            handlePostLikeClick(post.id);
                        }

                        // Función para manejar el clic en "Delete" de una publicación guardada
                        function handleBeforePostDeleteClick() {
                            const confirmed = window.confirm('Are you sure you want to delete the saved post?');
                            if (confirmed) handlePostDeleteClick(post.id);
                        }

                        // Función para manejar el clic en "Save" de una publicación guardada
                        function handleBeforePostSaveClick() {
                            handlePostSaveClick(post.id);
                        }

                        return (
                            <article key={post.id} className='post'>
                                <h3>{post.author.name}</h3>
                                <img className="post-image" src={post.image} alt={post.imageDescription} title={post.imageDescription} />
                                <p>{post.text}</p>
                                <button className='button' onClick={handleBeforePostLikeClick}>
                                    {(post.liked ? '😍' : '😒') + ' ' + post.likes.length + 'likes'}
                                </button>
                                <button className="button" onClick={handleBeforePostSaveClick}>
                                    {(post.saved ? '⭐' : '✡️')}
                                </button>
                                {post.author.id === sessionUserId ?
                                    <button className="button" onClick={handleBeforePostDeleteClick}>Delete post</button> : null}
                            </article>
                        );
                    })}
                </div> : null}
        </div>
    );
}

