import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="Not-Found-page">

            <NavLink to="/home">
                <button className=" bg-green-500 active:bg-green-700  text-white  rounded-full py-1 px-6 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Go to home</button>
            </NavLink>
        </div>
    );
};

export default NotFound;