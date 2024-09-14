import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // Simplified, not sending password to the server in this example
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Dummy validation (replace with backend authentication)
        if (email === "admin@example.com" && password === "admin123") {
            const user = {
                firstName: "Admin",
                lastName: "User",
                email: "admin@example.com",
            };
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/profile");
        } else {
            alert("Invalid login credentials!");
        }
    };

    return (
        <div className="container mx-auto mt-5">
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
