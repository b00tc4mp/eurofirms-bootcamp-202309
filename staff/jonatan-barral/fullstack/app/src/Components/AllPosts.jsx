import { useState, useEffect } from 'react'

import Posts from './Posts'

import retrievePosts from '../logic/retrievePosts'

function AllPosts(props) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        refreshPosts()
    }, [props.timestamp])

    function refreshPosts() {
        try {
            retrievePosts(window.sessionUserId, (error, posts) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setPosts(posts)
            })
        } catch (error) {
            alert(error.message)
        }
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

    return <Posts posts={posts} onPostLikeToggled={handleLikeClick} onPostSaveToggled={handleSaveClick} onPostDeleted={handleDeleteClick} />
}

export default AllPosts