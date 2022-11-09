import React from "react";
import { Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UsersLayout from "./layouts/UsersLayout";
import UsersListPage from "./pages/UserListPage";
import UserPage from "./pages/User/UserPage";
import EditUserPage from "./pages/User/EditUserPage";

const routes = [
    { path: "/", element: <MainPage /> },
    {
        path: "users",
        element: <UsersLayout />,
        children: [
            { path: "", element: <UsersListPage /> },
            { path: ":userId/profile", element: <UserPage /> },
            { path: ":userId/edit", element: <EditUserPage /> },
            {
                path: ":userId/*",
                element: <Navigate to="/users/:userId/profile" />,
            },
            {
                path: ":userId",
                element: <Navigate to="/users/:userId/profile" />,
            },
        ],
    },
    { path: "*", element: <Navigate to="/" /> },
];

export default routes;
