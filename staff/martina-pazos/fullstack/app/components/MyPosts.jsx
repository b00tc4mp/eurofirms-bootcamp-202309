import { useEffect, useState } from "react";

import Posts from './Posts'

import retrieveMyPosts from '../logic/retrieveMyPosts'

export default function MyPosts(props) {
    console.log('MyPost')

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
    }

    function handlePostDeleted() {
        refreshPosts()
    }

    function handlePostSaveToggled() {
        refreshPosts()
    }

    return <Posts posts={posts}
        onPostLikeToggled={handlePostLikeToggled} onPostSaveToggled={handlePostSaveToggle}
        onPostDeleted={handlePostDelete} onError=
        {props.onError} />
}