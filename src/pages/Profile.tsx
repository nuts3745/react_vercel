import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import UserProfileAvatar from '../UserProfileAvatar';

function Profile() {
    const { user } = useAuth0();
    return (
        <div>
            <h1>PROFILE</h1>
            <UserProfileAvatar style={{ width: "50px" }} />
            <h2>NAME</h2>
            <div>{user.name}</div>
            <h2>NICKNAME</h2>
            <div>{user.nickname}</div>
            <h2>picture</h2>
            <div>{user.picture}</div>
            <h2>EMAIL</h2>
            <div>{user.email}</div>
        </div>
    )
}

export default Profile
