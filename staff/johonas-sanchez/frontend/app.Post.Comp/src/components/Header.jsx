import retrieveUser from '../logic/retrieveUser';

function Header(props) {
    let name = null;
  
    try {
      const user = retrieveUser(sessionUserId);
  
      name = user.name;
    } catch (error) {
      alert(error.message);
    }
  
    function handleNewPostClick() {
      props.onNewPostClick();
    }
  
    function handleLogoutClick() {
      props.onLogoutClick();
    }

    function handleHomeClick (event) {
      event.preventDefault()

      setView(null)
  }

  function handleSavedClick (event) {
    event.preventDefault()

    try {
        const saved = retrieveSavedPosts(sessionUserId)

        setSaved(saved)
        setView('saved')
    } catch (error) {
        alert(error.message)
    }
}

    return (
      <header className="header" aria-label="Header">
            <h1><a href="" onClick={handleHomeClick}>Home</a></h1>
            <span aria-label="User name">{name}</span>
            <button title="New post" aria-label="New post" className="button" onClick={handleNewPostClick}>+</button>
            <a href="" onClick={handleSavedClick}>Saved</a>
            <button className="button" onClick={handleLogoutClick}>Logout</button>
        </header>
    );
  }

  export default Header;
  