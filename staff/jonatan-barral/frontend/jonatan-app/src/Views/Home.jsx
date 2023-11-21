import { useState } from 'react'

import retrieveUser from '../logic/retrieveUser'
import retrievePosts from '../logic/retrievePosts'
import retrieveSavedPosts from '../logic/retrieveSavedPosts'
import createNewPost from '../logic/CreateNewPost'

import Link from '../components/Link'
import Button from '../components/Button'
import Field from "../components/Field"
import Form from "../components/Form"
import Container from '../components/CONTAINER.JSX'
import Posts from "../components/Posts"
import SavedPost from "../components/SavedPost"


function Home(props) {

    const [view, setView] = useState(null)

    const [timestamp, setTimestamp] = useState(null)

    const [saved, setSaved] = useState(null)

    const [settings, setSettings] = useState(null)

    const [settingsView, setSettingsView] = useState(null)

    let name = null

    try {
        const user = retrieveUser(sessionUserId)

        name = user.name
    } catch (error) {
        alert(error.message)
    }

    let posts = null

    try {
        posts = retrievePosts(sessionUserId)
    } catch (error) {
        alert(error.message)
    }

    function handleLogoutClick() {
        sessionUserId = null

        props.onLogout()
    }

    function handleNewPostClick() {
        setView('new-post')
    }

    function handleNewPostCancelClick() {
        setView(null)
    }

    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector('#image-field')
        const imageDescriptionInput = event.target.querySelector('#image-description-field')
        const textInput = event.target.querySelector('#text-field')

        const image = imageInput.value
        const imageDescription = imageDescriptionInput.value
        const text = textInput.value

        try {
            createNewPost(sessionUserId, image, imageDescription, text)

            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }

    function refreshPosts() {
        if (view === null || view === 'newPost') {
            setTimestamp(Date.now())
        } else if (view === 'saved') {
            try {
                const saved = retrieveSavedPosts(window.sessionUserId)

                setSaved(saved)
            } catch (error) {
                alert(error.message)
            }
        }
    }

    function handlePostLikeClick() {
        refreshPosts()
    }

    function handlePostDeleteClick() {
        refreshPosts()
    }

    function handlePostSaveClick(postId) {
        refreshPosts()
    }

    function handleSavedClick(event) {
        event.preventDefault()

        try {
            const saved = retrieveSavedPosts(window.sessionUserId)

            setSaved(saved)
            setView('saved')
        } catch (error) {
            alert(error.message)
        }
    }

    function handleHomeClick(event) {
        event.preventDefault()

        setView(null)
    }

    function handleSettingsClick(event) {
        event.preventDefault();

        setView('settings');
    }

    function handleChangeEmailClick() {
        setSettingsView('change-email')
    }

    function handleChangeEmailCancelClick() {
        setSettingsView(null)
    }

    function handleChangeEmailSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-field')
        const newEmailImput = event.target.querySelector('#new-email-field')
        const passwordInput = event.target.querySelector('#password-field')

        const email = emailInput.value
        const newEmail = newEmailImput.value
        const password = passwordInput.value

        try {
            changeEmail(sessionUserId, email, newEmail, password)
            alert('email changed succesfully')

            setSettingsView(null)

            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }


    function handleChangePasswordClick() {
        setSettingsView('change-password')
    }

    function handleChangePasswordCancelClick() {
        setSettingsView(null)
    }

    function handleChangePasswordSubmit(event) {
        event.preventDefault()

        const oldPasswordInput = event.target.querySelector('#old-password-field')
        const newPasswordInput = event.target.querySelector('#new-password-field')
        const repeatPasswordInput = event.target.querySelector('#repeat-password-field')

        const oldPassword = oldPasswordInput.value
        const newPassword = newPasswordInput.value
        const repeatNewPassword = repeatPasswordInput.value

        try {
            changePassword(sessionUserId, oldPassword, newPassword, repeatNewPassword)

            alert('Change password succesfully')

            setSettingsView(null)

            setView(null)
        } catch (error) {
            alert(error.message)
        }

    }

    return <div>
        <header className="header" aria-label="Header">
            <span aria-label="User name">{name}</span>
            <Button title="New post" aria-label="New post" onClick={handleNewPostClick}>+</Button>
            <Button onClick={handleLogoutClick}>Logout</Button>
        </header>


        {view === 'new-post' ? <Container align="center">
            <h2>New post</h2>

            <Form onSubmit={handleNewPostSubmit}>
                <Field type="url" id="image-field" required>Image</Field>

                <Field type="text" id="image-description-field" required>Image description</Field>

                <Field type="text" id="text-field" required>Text</Field>

                <Button type="submit">Post</Button>
                <Button onClick={handleNewPostCancelClick}>Cancel</Button>
            </Form>
        </Container> : null}


        {(view === null || view === 'new-post') && posts !== null ? <Posts posts={posts} onLikeClick={handlePostLikeClick} onSaveClick={handlePostSaveClick} onDeleteClick={handlePostDeleteClick} />
            : null}

        {view === 'saved' && saved !== null ? <Posts posts={saved} onLikeClick={handlePostLikeClick} onSaveClick={handlePostSaveClick} onDeleteClick={handlePostDeleteClick} />
            : null}

        {view === 'settings' ? <Container aria-label="Settings">
            <Container className="header" aria-label="Header">
                <Button title="Change email" aria-label="Change email" onClick={handleChangeEmailClick}>Change your email address</Button>
                <Button title="Change password" aria-label="Change password" onClick={handleChangePasswordClick}>Change your password</Button>
            </Container>

            {settingsView === 'change-email' ? <Container>
                <h2>Change your email</h2>

                <Form onSubmit={handleChangeEmailSubmit}>
                    <Field type="email" id="email-field" title="E-mail" required>E-mail</Field>

                    <Field type="email" id="new-email-field" title="New E-mail" required>New Email</Field>


                    <Field type="password" id="password-field" title="Password" required>Password</Field>

                    <Button type="submit" >Change</Button>
                    <Button onClick={handleChangeEmailCancelClick}>Cancel</Button>
                </Form>
            </Container> : null}

            {settingsView === 'change-password' ? <Container>
                <h2>Change your password</h2>

                <Form onSubmit={handleChangePasswordSubmit}>

                    <Field type="password" id="od-password-field" title="Old password" required>Write your old password</Field>


                    <Field type="password" id="new-password-field" title="New password" required>Write your new password</Field>

                    <Field type="password" id="repeat-password-field" title="Repeat your new password" required>Repeat your new password</Field>

                    <Button type="submit" >Change</Button>
                    <Button onClick={handleChangePasswordCancelClick}>Cancel</Button>
                </Form>
            </Container> : null}

        </Container> : null}

        <footer className="footer" aria-label="Footter">
            <a onClick={handleHomeClick}>Home</a>
            <a onClick={handleSettingsClick}>Settings</a>
            <a onClick={handleSavedClick}>Saved</a>
        </footer>
    </div>
}

export default Home