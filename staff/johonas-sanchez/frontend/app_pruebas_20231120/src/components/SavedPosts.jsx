import { prepareFieldForTemplates } from 'generator-jhipster/utils/field'
import { useState } from 'react'

import retrieveSavedPosts from '../logic/retrieveSavedPosts'

import Posts from './Posts'

function SavedPosts(props) {
    console.log('SavedPosts')

    const [timestamp, setTimestamp] = useState(null)

    let posts = null

    try {
        posts = retrieveSavedPosts(window.sessionUserId)
    } catch (error) {
        alert(error.message)
    }

    function refreshPosts() {
        setTimestamp(Date.now())
    }

    function handleLikeClick() {
        refreshPosts()
    }

    function handleSaveClick() {
        refreshPosts()
    }

    function handleDeleteClick() {
        refreshPosts()
    }

    return <Posts posts={posts} onLikeClick={handleLikeClick} onSaveClick={handleSaveClick} onDeleteClick={handleDeleteClick} onUserClick={props.onUserClick} />
}

export default SavedPosts