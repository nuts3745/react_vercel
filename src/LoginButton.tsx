import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { Button } from "react-bootstrap";

function LoginButton() {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return !isAuthenticated ? (
        <div>
            <Button onClick={loginWithRedirect}>LOGIN</Button>
        </div>
    ) : null;
}

export default LoginButton
