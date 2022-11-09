import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
// import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
// import MainPage from "./pages/MainPage";
// import UsersLayout from "./layouts/UsersLayout";
// import UsersListPage from "./pages/UserListPage";
// import UserPage from "./pages/User/UserPage";
// import EditUserPage from "./pages/User/EditUserPage";

function App() {
    const elements = useRoutes(routes);
    return (
        <div>
            <AppLayout />
            {elements}
            {/* <Routes>
                <Route index element={<MainPage />} />
                <Route path="/users" element={<UsersLayout />}>
                    <Route index element={<UsersListPage />} />
                    <Route
                        path="/users/:userId/profile"
                        element={<UserPage />}
                    />
                    <Route
                        path="/users/:userId/edit"
                        element={<EditUserPage />}
                    />
                    <Route
                        path="/users/:userId/*"
                        element={<Navigate to="/users/:userId/profile" />}
                    />
                    <Route
                        path="/users/:userId"
                        element={<Navigate to="/users/:userId/profile" />}
                    />
                </Route>
                <Route from="*" element={<Navigate to="/" />} />
            </Routes> */}
        </div>
    );
}
export default App;
