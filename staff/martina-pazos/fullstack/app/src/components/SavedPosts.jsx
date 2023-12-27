import { useState, useEffect } from 'react'

import logic from '../logic'

import Posts from './Posts'

export default function SavedPost(props) {
    console.log('SavedPosts')

    const { posts, setPosts } = useState([])

    useEffect(() => {
        refreshPosts()
    }, [])

    function refreshPosts() {
        try {
            logic.retrieveSavedPosts((error, posts) => {
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