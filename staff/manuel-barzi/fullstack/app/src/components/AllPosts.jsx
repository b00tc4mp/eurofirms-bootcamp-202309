import { useState, useEffect } from 'react'

import Posts from './Posts'

import logic from '../logic'

export default function AllPosts(props) {
    console.log('AllPosts')

    const [posts, setPosts] = useState([])

    useEffect(() => {
        refreshPosts()
    }, [props.timestamp])

    function refreshPosts() {
        try {
            logic.retrievePosts((error, posts) => {
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