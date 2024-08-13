import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Nav = (props: { name: string, setName: (name: string) => void }) => {
    // const logout = async () => {
    //     try {
    //         await axios.post('http://localhost:2000/api/logout', {}, {
    //             headers: { 'Content-Type': 'application/json' },
    //             withCredentials: true,
    //         });

    //         props.setName('');
    //     } catch (error) {
    //         console.error('Error during logout:', error);
    //     }
    // }
    const logout = async () => {
        try {
            await axios.post('http://localhost:2000/api/logout', {}, {
                headers: { 'Content-Type': 'application/json' },
            });

            // Clear the token from local storage
            localStorage.removeItem('token');

            // Reset the user name in the state
            props.setName('');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    }

    let menu;

    if (props.name === '') {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>
        )
    } else {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
                </li>
            </ul>
        )
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Home</Link>

                <div>
                    {menu}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
