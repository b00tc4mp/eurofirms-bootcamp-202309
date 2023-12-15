import { useEffect, useState } from 'react'

import Posts from './Posts'

import retrieveMyPosts from '../logic/retrieveMyPosts'

function MyPosts(props) {
    console.log('MyPosts')

    const [posts, setPosts] = useState([])

    useEffect(() => {
        refreshPosts()
    }, [])

    function refreshPosts() {
        try {
            retrieveMyPosts((error, posts) => {
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
        props.onSuccess()
    }

    function handlePostDeleted() {
        refreshPosts()
        props.onSuccess()
    }

    function handlePostSaveToggled() {
        refreshPosts()
        props.onSuccess()
    }

    return <Posts posts={posts} onPostLikeToggled={handlePostLikeToggled} onPostSaveToggled={handlePostSaveToggled} onPostDeleted={handlePostDeleted} onError={props.onError} />
}

export default MyPosts