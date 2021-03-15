import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { Button } from 'react-bootstrap';

function LogoutButton(props: any) {
    const { isAuthenticated, logout } = useAuth0();

    return isAuthenticated ? (
        <Button
            variant="outline-primary"
            onClick={() => {
                logout({ returnTo: window.location.origin });
            }}
            {...props}
        >
            LOGOUT
        </Button>
    ) : null;
}

export default LogoutButton
