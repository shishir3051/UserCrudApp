import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../services/UserService";

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        phone:"",
        email: "",
    });

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await getUserById(id);
        setUser(result.data);
    };

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await updateUser(id, user);
        navigate("/");
    };

    return (
        <div className="container mx-auto mt-5">
            <form onSubmit={onSubmit}>
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
                <div className="mb-4">
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
                <div>
                    {" "}
                    <button
                        type="submit"
                        className="bg-yellow-500 text-white px-4 py-2 rounded"
                    >
                        Update User
                    </button>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-red-400 hover:bg-red-700 py-2 px-6 mx-4 rounded"
                    >
                        {" "}
                        Cancel{" "}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;
