import React from "react";
import Post from "./Post";

function SavedPosts({ savedPosts, onLikeClick, onDeleteClick, onSaveClick, sessionUserId }) {
    // Funciones que utilizan la técnica de "captura de variables"
    function createHandleLikeClick(id) {
        return function () {
            onLikeClick(id);
        };
    }

    function createHandleDeleteClick(id) {
        return function () {
            const confirmed = window.confirm('Are you sure you want to delete the post?');
            if (confirmed) onDeleteClick(id);
        };
    }

    function createHandleSaveClick(id) {
        return function () {
            onSaveClick(id);
        };
    }

    return (
        <div className="view">
            {savedPosts.map(function (post) {
                return (
                    <Post
                        key={post.id}
                        post={post}
                        onLikeClick={createHandleLikeClick(post.id)}
                        onDeleteClick={createHandleDeleteClick(post.id)}
                        onSaveClick={createHandleSaveClick(post.id)}
                        sessionUserId={sessionUserId}
                    />
                );
            })}
        </div>
    );
}

export default SavedPosts;
