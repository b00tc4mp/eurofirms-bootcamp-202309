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
            <h1>Home</h1>
            <span aria-label="User name">{name}</span>
            <button
                title="New post"
                aria-label="New post"
                className="button"
                onClick={handleNewPostClick}
            >
                +
            </button>
            <button className="button" onClick={handleLogoutClick}>
                Logout
            </button>
        </header>
    );
}
