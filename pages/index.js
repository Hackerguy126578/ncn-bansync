import React from "react";


export default function Home() {
    const handleLogin = () => {
        const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;
        const redirectUri = encodeURIComponent(process.env.NEXT_PUBLIC_REDIRECT_URI);
        const scope = "identify guilds";
        const responseType = "token";

        window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    };

    return (
        <div className="hero">
            <nav className="navbar">
                <div className="logo">NCN BanSync</div>
                <button className="loginBtn" onClick={handleLogin}>Login with Discord</button>
            </nav>
            <header>
                <h1>NCN BanSync</h1>
                <p>The most powerful anti-raid bot with anti-swearing</p>
            </header>
            <footer>Powered by NeonCore Nova</footer>
        </div>
    );
}
