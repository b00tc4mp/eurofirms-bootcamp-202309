import React from 'react';

function PostList({ posts, sessionUserId, handlePostLikeClick, handlePostDeleteClick, handlePostSaveClick }) {
  return (
    <div aria-label="Posts list" className="view">
      {posts !== null ? (
        <div>
          {posts.toReversed().map((post) => {
            function handleBeforePostLikeClick() {
              handlePostLikeClick(post.id);
            }

            function handleBeforePostDeleteClick() {
              const confirmed = window.confirm('Delete post?');
              if (confirmed) {
                handlePostDeleteClick(post.id);
              }
            }

            function handleBeforePostSaveClick() {
              handlePostSaveClick(post.id);
            }

            return (
              <article key={post.id} className="post">
                <h3>{post.author.name}</h3>
                <img
                  className="post-image"
                  src={post.image}
                  alt={post.imageDescription}
                  title={post.imageDescription}
                />
                <p>{post.text}</p>
                <button className="button" onClick={handleBeforePostLikeClick}>
                  {post.liked ? '❤️' : '🩶'} {post.likes.length} likes
                </button>
                <button className="button" onClick={handleBeforePostSaveClick}>
                  {post.saved ? '⭐️' : '✩'}
                </button>
                {post.author.id === sessionUserId ? (
                  <button className="button" onClick={handleBeforePostDeleteClick}>
                    Delete
                  </button>
                ) : null}
              </article>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default PostList;