import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import UserProfileAvatar from './UserProfileAvatar';

function UserProfileDropdown(props: any) {
    const { user, isAuthenticated, logout } = useAuth0();

    return isAuthenticated ? (
        <div>
            <NavDropdown
                alignRight
                title={<UserProfileAvatar {...props} />}
                id="basic-nav-dropdown"
            >
                <Dropdown.Header>
                    <div>{user.name}</div>
                    <div>Japan</div>
                </Dropdown.Header>
                <NavDropdown.Divider />
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something else</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                    <div onClick={() => {
                        logout({ returnTo: window.location.origin });
                    }}>
                        → LOGOUT
                    </div>
                </NavDropdown.Item>
            </NavDropdown>
        </div>
    ) : null;
}

export default UserProfileDropdown
