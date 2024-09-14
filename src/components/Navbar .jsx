import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    const isLoggedIn = localStorage.getItem("user");

    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <div>
                    <Link to="/" className="mr-4">
                        Home
                    </Link>
                    <Link to="/about" className="mr-4">
                        About
                    </Link>
                    {isLoggedIn && (
                        <Link to="/profile" className="mr-4">
                            Profile
                        </Link>
                    )}
                </div>
                <div>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 px-4 py-2 rounded"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-blue-500 px-4 py-2 rounded"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
