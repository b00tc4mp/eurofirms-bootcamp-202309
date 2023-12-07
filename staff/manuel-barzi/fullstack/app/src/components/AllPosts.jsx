import { useState, useEffect } from 'react'

import Posts from '../components/Posts'

import retrievePosts from '../logic/retrievePosts'

function AllPosts(props) {
    console.log('AllPosts')

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

    return <Posts posts={posts} onLikeClick={handleLikeClick} onSaveClick={handleSaveClick} onDeleteClick={handleDeleteClick} />
}

export default AllPosts