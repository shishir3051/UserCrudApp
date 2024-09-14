import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/UserService";

const AddUser = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        phone:"",
        email: "",
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await createUser(user);
        navigate("/");
    };
    const reset = (e) => {
        e.preventDefault();
        setUser({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
        });
        setError("");
    };

    return (
        <div className="container mx-auto mt-5">
            <form onSubmit={onSubmit} className=" max-w-5xl  ml-80">
                <div className="mb-4">
                    <label className="block text-gray-700">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={onChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={onChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Phone</label>
                    <input
                        type="phone"
                        name="phone"
                        value={user.phone}
                        onChange={onChange}
                        required
                        pattern="0-9]{15}"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={onChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className=" space-x-6">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add User
                    </button>
                    <button
                        onClick={reset}
                        className="bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded"
                    >
                        Clear
                    </button>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-red-400 hover:bg-red-700 py-2 px-6 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddUser;
