import React from "react";

export default function Navbar({ user, onLogin }) {
    return (
        <nav className="navbar">
            <div className="logo">NCN BanSync</div>
            {!user ? (
                <button className="loginBtn" onClick={onLogin}>Login with Discord</button>
            ) : (
                <span>Welcome, {user.username}</span>
            )}
        </nav>
    );
}
