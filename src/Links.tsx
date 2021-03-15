import React from 'react';
import { Nav } from 'react-bootstrap';
import { ChatFill, Diamond, EmojiLaughing } from "react-bootstrap-icons";
import { useHistory, useLocation } from 'react-router-dom';
import TextWithIcon from "./TextWithIcon";



const LinkItem = ({ pathname, pageName, icon }: any) => {
    const black = "black";
    const cyan = "#17A2AE";

    const history = useHistory();
    const location = useLocation();
    return (
        <Nav.Link
            onClick={() => {
                history.push(pathname);
            }}
            style={{ color: location.pathname === pathname ? cyan : black }}
        >
            <TextWithIcon icon={icon} text={pageName} />
        </Nav.Link>
    )
}

function Links() {
    return (
        <div>
            <Nav className="flex-column">
                <LinkItem pathname="/" pageName="Home" icon={<Diamond />} />
                <LinkItem pathname="/profile" pageName="Profile" icon={<EmojiLaughing />} />
                <LinkItem pathname="/support" pageName="Get Support" icon={<ChatFill />} />
            </Nav>
        </div>
    )
}

export default Links
