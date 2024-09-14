import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/UserService";
import { Link } from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const result = await getUsers();
            setUsers(result.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        // Optimistically remove user from the UI
        setUsers(users.filter((user) => user.id !== id));
        try {
            await deleteUser(id);
        } catch (error) {
            console.error("Error deleting user:", error);
            // Optionally reload if delete fails
            loadUsers();
        }
    };

    return (
        <div className="container mx-auto mt-5">
            <div className="flex justify-end mb-5">
                <Link
                    to="/add-user"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add User
                </Link>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : users.length === 0 ? (
                <p>No users available.</p>
            ) : (
                <table className="min-w-full table-auto text-center border border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">First Name</th>
                            <th className="px-4 py-2">Last Name</th>
                            <th className="px-4 py-2">Phone</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {users.map((user) => (
                            <tr key={user.id} className="border-t">
                                <td className="px-4 py-2">{user.id}</td>
                                <td className="px-4 py-2">{user.firstName}</td>
                                <td className="px-4 py-2">{user.lastName}</td>
                                <td className="px-4 py-2">{user.phone}</td>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2">
                                    <Link
                                        to={`/edit-user/${user.id}`}
                                        className="bg-yellow-500 text-white px-3 py-1.5 rounded mr-2"
                                    >
                                        Edit User
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="bg-red-500 text-white px-3 py-1.5 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserList;
