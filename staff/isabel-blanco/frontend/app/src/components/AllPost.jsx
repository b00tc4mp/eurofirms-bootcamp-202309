import { useState } from "react"
import Posts from '../components/Posts'
import retrievePosts from "../logic/retrievePosts"

function AllPosts() {
    console.log('AllPosts')

    const [timestamp, setTimestamp] = useState(null)

    let posts = null

    try {
        posts = retrievePosts(window.sessionUserId)
    } catch (error) {
        alert(error.message)
    }

    function refreshPosts() {
        setTimestamp(Date.now())
    }

    function handleLikeClick() {
        refreshPosts()
    }

    function handleDeleteClick() {
        refreshPosts()
    }

    function handleSaveClick(postId) {
        refreshPosts()
    }

    return <Posts posts={posts} onLikeClick={handleLikeClick} onSaveClick={handleSaveClick} onDeleteClick={handleDeleteClick} />
}

export default AllPosts