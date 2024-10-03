import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Dashboard() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const correctUser = import.meta.env.VITE_USERNAME;
    const correctPass = import.meta.env.VITE_PASSWORD;

    function handleLogin() {
        if (username === correctUser && password === correctPass) {
            navigate("/blogs");
        } else {
            alert("Incorrect username or password");
        }
    }

    return (
        <div>
            <div className="lg:py-7 py-4 2xl:px-[133px] px-4 md:px-8 w-full flex justify-between md:gap-10 gap-6 md:flex-row flex-col">
                <Sidebar />

                <div className="flex flex-col justify-center items-start space-y-4 mr-[600px]">
                    <h1 className="font-bold text-4xl mb-8">Admin Login</h1>
                    <input 
                        type="text" 
                        placeholder="Enter Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="border p-2 rounded"
                    />
                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="border p-2 rounded"
                    />
                    <button 
                        className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
                        disabled={username !== correctUser || password !== correctPass}
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Dashboard;
