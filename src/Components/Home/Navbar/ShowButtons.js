import React from 'react'
import './ShowButtons.css'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function ShowButtons() {
    return (
        <div>
            <ul className="buttons">
                <li>
                    <button className="log-in">
                        <FaUser className="user-icon" />
                        <Link to={'/logIn'}>LogIn</Link>
                    </button>
                </li>
                <li>
                    <button className="sign-in">
                        <Link to={'/signIn'}>SignIn</Link>
                    </button>
                </li>
            </ul>
        </div>
    )
}
