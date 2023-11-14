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
  
    return (
      <header className="header" aria-label="Header">
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <span aria-label="User name">{name}</span>
        </div>
        <div>
          <button
            title="New post"
            aria-label="New post"
            className="button"
            onClick={handleNewPostClick}
          >
            +
          </button>
        </div>
        <div>
          <button className="button" onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
      </header>
    );
  }

  export default Header;
  