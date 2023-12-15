import { useState, useEffect } from "react"

import retrieveUser from "../logic/retrieveUser"

import logoutUser from "../logic/logoutUser"

import { JWTError } from "../utils/errors"

import Button from "../components/Button"
import Link from "../components/Link"
import Container from "../components/Container"
import MyPosts from "../components/MyPosts"
import SavedPosts from "../components/SavedPosts"
import AllPosts from "../components/AllPosts"
import NewPost from "../components/NewPost"
import UserProfile from "../components/UserProfile"

import Logo from "../components/Logo"

function Home(props) {
   console.log("Home useEffect")

   const [view, setView] = useState(null)
   const [name, setName] = useState(null)
   const [timestamp, setTimestamp] = useState(null)

   useEffect(() => {
      try {
         retrieveUser((error, user) => {
            if (error) {
               alert(error.message)

               return
            }

            setName(user.name)
         })
      } catch (error) {
         if (error instanceof JWTError) 
            props.onError(error)
         else 
            alert(error.message)
      }
   }, [])

   function handleLogoutClick() {
      logoutUser()

      props.onLogout()
   }

   function handleNewPostClick() {
      setView("new-post")
   }

   function handleNewPostCancelClick() {
      setView(null)
   }

   function handleNewPostSubmit() {
      setView(null)
      setTimestamp(Date.now())
   }

   function handleSavedClick(event) {
      event.preventDefault()

      setView("saved")
   }

   function handleUserClick(event) {
      event.preventDefault()

      setView("user-profile")
   }

   function handleHomeClick(event) {
      event.preventDefault()

      setView(null)
   }

   function handleMyPostsClick(event) {
      event.preventDefault()

      setView("my-posts")
   }

   return (
      <Container align="center">
         <header className="flex justify-between items-center md:min-w-[500px] lg:min-w-[768px] mt-3 mb-5 bg-[ghostwhite] px-2" aria-label="Header">
            <Link className="hidden lg:block p-0" onClick={handleHomeClick}>
               <Logo />
            </Link>

            <Button className="hidden lg:block" title="New post" aria-label="New post (+)" onClick={handleNewPostClick}>
               +
            </Button>

            <Link className="p-0" onClick={handleSavedClick}>
               Saved
            </Link>

            <Link className="p-0" onClick={handleMyPostsClick}>
               My posts
            </Link>

            <span className="hidden lg:block" aria-label="User name">
               {name}
            </span>
            <div className="flex items-center justify-center h-full space-x-2">
               <Button onClick={handleUserClick}>
                  <svg
                     className="lg:hidden h-5 w-5 text-black-500"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     strokeWidth="2"
                     stroke="currentColor"
                     fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  >
                     <path stroke="none" d="M0 0h24v24H0z" />
                     <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{" "}
                     <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span className="hidden lg:block">Settings</span>
               </Button>

               <Button onClick={handleLogoutClick}>Logout</Button>
            </div>
         </header>

         {view === 'new-post' ? <NewPost onNewPostSubmit={handleNewPostSubmit} onNewPostCancelClick={handleNewPostCancelClick} onError={props.onError} /> : null}

         {view === null || view === 'new-post' ? <AllPosts timestamp={timestamp} onError={props.onError} /> : null}

         {view === "user-profile" && <UserProfile />}

         {view === 'saved' ? <SavedPosts onError={props.onError} /> : null}

         {view === 'my-posts' ? <MyPosts onError={props.onError} /> : null}

         <div className="h-[3rem] mb-5"></div>

         <footer className="bg-[ghostwhite] fixed bottom-0 w-full flex justify-center items-center h-[3rem] lg:hidden">
            <Link onClick={handleHomeClick}>
               <Logo />
            </Link>
            <Button title="New post" aria-label="New post (+)" onClick={handleNewPostClick}>
               +
            </Button>
         </footer>
      </Container>
   )
}

export default Home
