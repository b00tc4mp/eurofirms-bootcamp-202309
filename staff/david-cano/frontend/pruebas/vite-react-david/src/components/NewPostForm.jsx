// NewPostForm.jsx
import React from 'react';
import Button from './Button';

function NewPostForm({ onSubmit, onCancelClick }) {
    function handleFormSubmit(event) {
        event.preventDefault();
        onSubmit(event);
    };
    return (
        <div className="view">
            <h2>New post</h2>

            <form id="new-post-form" className="form" onSubmit={handleFormSubmit}>
                <label htmlFor="image-input" className="label">Image</label>
                <input type="url" id="image-input" className="input" required />

                <label htmlFor="image-description-input" className="label">Image description</label>
                <input type="text" id="image-description-input" className="input" required />

                <label htmlFor="text-input" className="label">Text</label>
                <input type="text" id="text-input" className="input" required />
                <Button type="submit">Post</Button>
                <Button onClick={onCancelClick}>Cancel</Button>
            </form>
        </div>
    );
}

export default NewPostForm;
