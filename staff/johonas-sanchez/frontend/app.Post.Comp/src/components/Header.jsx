import retrieveUser from '../logic/retrieveUser';

function Header({onLogoutClick, onHomeClick, onSavedClick, onNewPostClick}) {
    let name = null;
  
    try {
      const user = retrieveUser(sessionUserId);
  
      name = user.name;
    } catch (error) {
      alert(error.message);
    }
  
    function handleNewPostClick() {
      onNewPostClick();
    }
  
    function handleLogoutClick() {
      onLogoutClick();
    }

    function handleHomeClick (event) {
      event.preventDefault()

      onHomeClick()
  }

  function handleSavedClick (event) {
    event.preventDefault()

    onSavedClick()
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
  