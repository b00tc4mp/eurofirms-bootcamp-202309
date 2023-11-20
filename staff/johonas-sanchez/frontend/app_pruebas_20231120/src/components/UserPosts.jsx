import { useState } from 'react'
import retrieveUserPosts from '../logic/retrieveUserPosts'

import Posts from './Posts'


function UserPosts(props) {
    console.log('UserPosts')

    const [timestamp, setTimestamp] = useState(null)

    let posts = null

    try {
        posts = retrieveUserPosts(sessionUserId, props.userId)
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

    return <Posts posts={posts} userPosts={true} onLikeClick={handleLikeClick} onSaveClick={handleSaveClick} onDeleteClick={handleDeleteClick} />
}

export default UserPosts