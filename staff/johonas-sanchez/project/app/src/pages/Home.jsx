import logic from '../logic'

function Home(props) {
   console.log("Home")

   function handleLogoutClick() {
      logic.logoutUser()

      props.onLogout()

   }

//    function handleHomeClick(event) {
//       event.preventDefault()

//       navigate("/")
//    }

   return (
      <>
         <h1>Home</h1>
         <button onClick={handleLogoutClick}>Logout</button>
      </>
   )
}

export default Home
