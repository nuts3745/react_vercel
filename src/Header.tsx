import React from 'react'
import { Navbar } from 'react-bootstrap'
import * as config from "./app.config.json"
import LoginButton from './LoginButton'
import UserProfileDropdown from "./UserProfileDropdown"

function Header() {
    return (
        <div>
            <Navbar
                style={{
                    borderBottom: "solid 1.5px #f3f4f4",
                    height: "56px",
                    marginBottom: "20px",
                }}
                bg="white"
                expand="lg"
                className="justify-content-between"
            >
                <Navbar.Brand href="/">{config.app.name}</Navbar.Brand>
                <LoginButton />
                <UserProfileDropdown />
            </Navbar>
        </div>
    )
}

export default Header
