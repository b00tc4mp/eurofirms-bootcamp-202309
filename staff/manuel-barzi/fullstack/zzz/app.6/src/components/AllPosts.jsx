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
            retrievePosts((error, posts) => {
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

export default AllPosts