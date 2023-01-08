import React from "react";
import { Route, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// receives component and any other props represented by ...rest
export default function ProtectedRoutes({ component: Component, ...rest }) {
        // get cookie from browser if logged in
        const token = cookies.get("TOKEN");

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return token ? <Component /> : <Navigate to="/" />;
}