import React from "react";
import { Link } from "react-router-dom";

const NotFound = ({ location }) => (
    <>
        <h1>404 Page Not found.</h1>
        <p>Looks like the path is invalid</p>
        <p>Page not found for {location.pathname}</p>
        <Link to="/">Go Home</Link>
    </>
);

export const NotFoundScreen = NotFound;