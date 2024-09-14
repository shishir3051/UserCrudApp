import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        if (!loggedUser) {
            navigate("/login");
        } else {
            setUser(loggedUser);
        }
    }, [navigate]);

    return (
        <div className="container mx-auto mt-5">
            <h1 className="text-3xl font-bold">Profile</h1>
            <div className="mt-4">
                <p>
                    <strong>First Name:</strong> {user?.firstName}
                </p>
                <p>
                    <strong>Last Name:</strong> {user?.lastName}
                </p>
                <p>
                    <strong>Email:</strong> {user?.email}
                </p>
            </div>
        </div>
    );
};

export default Profile;
