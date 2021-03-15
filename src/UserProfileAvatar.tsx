import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Image } from 'react-bootstrap';

function UserProfileAvatar(props: any) {
    const { user } = useAuth0();

    return (
        <div>
            <Image
                style={{ width: "30px" }}
                src={user.picture}
                roundedCircle
                {...props}
            />
        </div>
    )
}

export default UserProfileAvatar
