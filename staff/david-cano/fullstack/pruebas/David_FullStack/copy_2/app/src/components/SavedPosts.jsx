import { useState, useEffect } from 'react'

import retrieveSavedPosts from '../logic/retrieveSavedPosts'

import Posts from './Posts'

function SavedPosts(props) {
    console.log('SavedPosts')

    const [posts, setPosts] = useState([])

    useEffect(() => {
        refreshPosts()
    }, [])

    function refreshPosts() {
        try {
            retrieveSavedPosts( (error, posts) => {
                if (error) {
                    props.onError(error)

                    return
                }

                setPosts(posts)
            })
        } catch (error) {
            props.onError(error)
        }
    }

    function handlePostLikeToggled() {
        refreshPosts()
    }

    function handlePostDeleted() {
        refreshPosts()
    }

    function handlePostSaveToggled() {
        refreshPosts()
    }

    return <Posts posts={posts} onPostLikeToggled={handlePostLikeToggled} onPostSaveToggled={handlePostSaveToggled} onPostDeleted={handlePostDeleted} onError={props.onError} />
}

export default SavedPosts