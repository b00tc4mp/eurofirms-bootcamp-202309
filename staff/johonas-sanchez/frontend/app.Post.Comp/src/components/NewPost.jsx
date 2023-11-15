
function NewPost({onNewPostCancelClick}) {

    function handleNewPostCancelClick() {
        onNewPostCancelClick();
    }


    return (
        <div className="view">
            <h2>New post</h2>

            {/* <form className="form" onSubmit={handleNewPostSubmit}> */}
            <form className="form">
                <label htmlFor="image-input" className="label">
                    Image
                </label>
                <input type="url" id="image-input" className="input" required />

                <label htmlFor="image-description-input" className="label">
                    Image description
                </label>
                <input
                    type="text"
                    id="image-description-input"
                    className="input"
                    required
                />

                <label htmlFor="text-input" className="label">
                    Text
                </label>
                <input type="text" id="text-input" className="input" required />

                <button type="submit" className="button">
                    Post
                </button>
                <button className="button" onClick={handleNewPostCancelClick}>
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default NewPost;
