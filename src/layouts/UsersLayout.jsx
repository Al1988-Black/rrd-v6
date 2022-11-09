import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const UsersLayout = () => {
    return (
        <div>
            <h1>Users Layout</h1>
            <NavLink to="/">Main Page</NavLink>
            <Outlet />
        </div>
    );
};

export default UsersLayout;
