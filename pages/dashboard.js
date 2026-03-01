import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [servers, setServers] = useState([]);

    useEffect(() => {
        const hash = window.location.hash;
        const token = new URLSearchParams(hash.replace("#", "?")).get("access_token");
        if (!token) return;

        // Fetch user info
        axios.get("/api/userinfo", { headers: { Authorization: `Bearer ${token}` } })
            .then(res => setUser(res.data));

        // Fetch user servers
        axios.get("/api/servers", { headers: { Authorization: `Bearer ${token}` } })
            .then(res => setServers(res.data));
    }, []);

    const handleLogin = () => {
        const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;
        const redirectUri = encodeURIComponent(process.env.NEXT_PUBLIC_REDIRECT_URI);
        const scope = "identify guilds";
        const responseType = "token";

        window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    };

    return (
        <div className="dashboard">
            <Navbar user={user} onLogin={handleLogin} />
            {user && <h2>Welcome, {user.username}</h2>}
            <h3>Your Servers:</h3>
            <div className="serverList">
                {servers.map(s => (
                    <div key={s.id} className="serverCard">{s.name}</div>
                ))}
            </div>
        </div>
    );
}
