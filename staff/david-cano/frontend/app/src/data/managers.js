import { cloneUser, clonePost, generateId } from "./helpers"
import {User, Post} from './models'

//database collections
const db = {
    users: [],
    posts: [],

    findUserByEmail: function (email) {
        const user = this.users.find(function (user) {
            return user.email === email
        })

        if (!user) return null

        return cloneUser(user)
    },

    createUser: function (name, email, password) {
        const user = new User(generateId(), name, email, password, [])

        this.users.push(user)
    },

    findUserById: function (id) {
        const user = this.users.find(function (user) {
            return user.id === id
        })

        if (!user) return null

        return cloneUser(user)
    },

    updateUser: function (user) {
        const userId = user.id

        const userIndex = this.users.findIndex(function (user) {
            return user.id === userId
        })
        if (userIndex < 0)
            throw new Error('User not found')

        this.users[userIndex] = cloneUser(user)
    },

    getUsers: function () {
        return this.users.map(function (user) {
            return cloneUser(user)
        })
    },

    getPosts: function () {
        return this.posts.map(function (post) {
            return clonePost(post)
        })
    },

    createPost: function (userId, image, imageDescription, text) {
        const post = new Post(generateId(), userId, image, imageDescription, text, [])

        this.posts.push(post)
    },

    findPostById: function (id) {
        const post = this.posts.find(function (post) {
            return post.id === id
        })

        if (!post) return null

        return clonePost(post)
    },

    updatePost: function (post) {
        const postId = post.id

        const postIndex = this.posts.findIndex(function (post) {
            return post.id === postId
        })

        if (postIndex < 0)
            throw new Error('post not found')

        this.posts[postIndex] = clonePost(post)
    },

    removePostById: function (id) {
        const postIndex = this.posts.findIndex(function (post) {
            return post.id === id
        })

        if (postIndex < 0)
            throw new Error('Post not found')

        this.posts.splice(postIndex, 1)
    }
}

export default db
