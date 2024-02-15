import { useState } from "react"

import retrieveSavedPost from '../logic/retrieveSavedPosts'

import Posts from './Posts'

function SavedPost() {
    console.log('SavedPosts')

    const [timestamp, setTimestamp] = useState(null)

    let post = null

    try {
        posts = retrieveSavedPost(window.sessionUserId)
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


export default SavedPost












