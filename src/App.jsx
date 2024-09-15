import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Profile from "./components/Profile";
import Login from "./components/Login";
import "./App.css";
import Navbar from "./components/Navbar ";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<UserList />} />
                    <Route path="/add-user" element={<AddUser />} />
                    <Route path="/edit-user/:id" element={<EditUser />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
