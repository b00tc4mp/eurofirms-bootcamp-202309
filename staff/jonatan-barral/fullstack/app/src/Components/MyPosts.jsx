import { useState } from 'react'

import Posts from './Posts'

import retrieveMyPosts from '../logic/retrieveMyPosts'

function MyPosts() {

    const [timestamp, setTimestamp] = useState(null)

    let posts = null

    try {
        posts = retrieveMyPosts(window.sessionUserId)
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

    return <Posts posts={posts} onLikeClick={handleLikeClick} onSaveClick={handleSaveClick} onDeleteClick={handleDeleteClick} />
}

export default MyPosts