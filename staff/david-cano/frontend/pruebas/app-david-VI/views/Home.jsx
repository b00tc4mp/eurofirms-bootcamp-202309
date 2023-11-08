function Home(props) {
    // Definir estados para la vista y el timestamp
    const viewState = React.useState(null);
    const view = viewState[0];  // Estado actual de la vista
    const setView = viewState[1];  // Función para actualizar el estado de la vista

    const timestampState = React.useState(null);
    const setTimestamp = timestampState[1];  // Función para actualizar el estado del timestamp

    let name = null;

    try {
        // Intentar recuperar información del usuario utilizando un ID de sesión
        const user = retrieveUser(sessionUserId);
        name = user.name;  // Asignar el nombre del usuario a la variable 'name'
    } catch (error) {
        alert(error.message);  // Mostrar una alerta en caso de error al recuperar el usuario
    }

    let posts = null;

    try {
        // Intentar recuperar los posts del usuario utilizando un ID de sesión
        posts = retrievePosts(sessionUserId);
    } catch (error) {
        alert(error.message);  // Mostrar una alerta en caso de error al recuperar los posts
    }

    function handleLogoutClick() {
        sessionUserId = null;  // Cerrar la sesión del usuario

        props.onLogout();  // Llamar a la función 'onLogout' pasada como prop
    }

    function handleNewPostClick() {
        setView('new-post');  // Actualizar el estado de la vista a 'new-post'
    }

    function handleNewPostCancelClick() {
        setView(null);  // Restablecer el estado de la vista a null
    }

    function handleNewPostSubmit(event) {
        event.preventDefault();  // Prevenir el comportamiento predeterminado del formulario

        // Obtener los valores de los campos de entrada del formulario
        const imageInput = event.target.querySelector('#image-input');
        const imageDescriptionInput = event.target.querySelector('#image-description-input');
        const textInput = event.target.querySelector('#text-input');

        // Asignar los valores de los campos de entrada a variables
        const image = imageInput.value;
        const imageDescription = imageDescriptionInput.value;
        const text = textInput.value;

        try {
            // Intentar crear un nuevo post con los valores proporcionados
            createNewPost(sessionUserId, image, imageDescription, text);

            setView(null);  // Restablecer el estado de la vista a null
        } catch (error) {
            alert(error.message);  // Mostrar una alerta en caso de error al crear un nuevo post
        }
    }

    function handlePostLikeClick(postId) {
        try {
            // Intentar cambiar el estado de "me gusta" de un post y actualizar el timestamp
            toggleLikePost(sessionUserId, postId);
            setTimestamp(Date.now());
        } catch (error) {
            alert(error.message);  // Mostrar una alerta en caso de error al dar "me gusta" a un post
        }
    }

    return (
        <div>
            {/* Encabezado de la página */}
            <header className="header" aria-label="Header">
                <h1>Home</h1>
                <span id="user-name-span" aria-label="User name">{name}</span>
                <button id="new-post-button" title="New post" aria-label="New post" className="button" onClick={handleNewPostClick}>+</button>
                <button id="logout-button" className="button" onClick={handleLogoutClick}>Logout</button>
            </header>
    
            {/* Panel para crear un nuevo post (visible cuando 'view' es igual a 'new-post') */}
            {view === 'new-post' ? (
                <div id="new-post-panel" className="view">
                    <h2>New post</h2>
    
                    {/* Formulario para crear un nuevo post */}
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
                </div>
            ) : null}
    
            {/* Lista de publicaciones (visible cuando 'posts' no es nulo) */}
            {posts !== null ? (
                <div id="posts-list" aria-label="Posts list" className="view">
                    {/* Mapear cada publicación y mostrarla en la lista */}
                    {posts.toReversed().map(function (post) {
                        function handleBeforePostLikeClick() {
                            handlePostLikeClick(post.id);
                        }
                        return (
                            <article key={post.id} className='post'>
                                <h3>{post.author}</h3>
                                <img className="post-image" src={post.image} alt={post.imageDescription} title={post.imageDescription} />
                                <p>{post.text}</p>
                                <button className='button' onClick={handleBeforePostLikeClick}>
                                    {(post.liked ? '😍' : '😒') + ' ' + post.likes.length + 'likes'}
                                </button>
                            </article>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}    