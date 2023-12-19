import { useEffect, useState } from 'react'

import Posts from './Posts'

import logic from '../logic'

export default function MyPosts(props) {
    console.log('MyPosts')

    const [posts, setPosts] = useState([])

    useEffect(() => {
        refreshPosts()
    }, [])

    function refreshPosts() {
        try {
            logic.retrieveMyPosts((error, posts) => {
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