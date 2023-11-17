// Header.js
import React from 'react';
import Button from './Button';
import Link from './Link';

function Header({ onHomeClick, userName, onNewPostClick, onSavedClick, onLogoutClick }) {
    return (
        <header className="header" aria-label="Header">
            <h1><Link onClick={onHomeClick}>Home</Link></h1>
            <span id="user-name-span" aria-label="User name">{userName}</span>
            <Button title="New post" aria-label="New post (+)" className="button" onClick={onNewPostClick}>+</Button>
            <Link onClick={onSavedClick}>Saved</Link>
            <Button onClick={onLogoutClick}>Logout</Button>
        </header>
    );
}

export default Header;
