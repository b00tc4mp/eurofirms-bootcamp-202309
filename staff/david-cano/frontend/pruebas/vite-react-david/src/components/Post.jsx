// Post.jsx
import React from 'react';
import Button from '../components/Button';

function Post({ post, onLikeClick, onDeleteClick, onSaveClick, sessionUserId }) {
    // Función para manejar el clic en "Me gusta"
    function handleLikeClick() {
        onLikeClick(post.id);
    }

    // Función para manejar el clic en "Eliminar"
    function handleDeleteClick() {
        const confirmed = window.confirm('Are you sure you want to delete the post?');
        if (confirmed) onDeleteClick(post.id);
    }

    // Función para manejar el clic en "Guardar"
    function handleSaveClick() {
        onSaveClick(post.id);
    }


    return (
        <article key={post.id} className='post'>
            <h3>{post.author.name}</h3>
            <img className="post-image" src={post.image} alt={post.imageDescription} title={post.imageDescription} />
            <p>{post.text}</p>
            <Button onClick={handleLikeClick}>{(post.liked ? '😍' : '😒') + ' ' + post.likes.length + ' likes'}</Button>
            <Button onClick={handleSaveClick}>{(post.saved ? '⭐' : '✡️')}</Button>
            {post.author.id === sessionUserId ? <Button onClick={handleDeleteClick}>Delete post</Button> : null}
        </article>
    );
}

export default Post;
