import React from 'react';
import { ProfileProps } from './profile.types';

const Profile: React.FC<ProfileProps> = props => {
    const { userId, accessToken } = props;

    return (
        <section className="ADMIN">
            <div>Hello darkness my old friend</div>
            <div>{`${userId}'s accessToken is ${accessToken}`}</div>
        </section>
    );
};

export default Profile;
