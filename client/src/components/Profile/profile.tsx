import React from 'react';
import { ProfileProps } from './profile.types';

import './profile.scss';

const Profile: React.FC<ProfileProps> = props => {
    const { userId, accessToken } = props;
    return (
        <section className="PROFILE">
        <div className="center4">
            <div className="right">
                <div className="title">Profile</div>
                <div className="profilelogo"></div>
                <br/>
                    <button className="profilebar">
                    Jane Doe
                    </button>
                    <button className="profilebar">
                    Edit Profile
                    </button>
                    <button className="profilebar">
                    Settings & Privacy
                    </button>
                    <button className="profilebar">
                    Help & Support
                    </button>
                    <button className="profilebar">
                    Logout
                    </button>



            </div>
        </div>

        <a className="inspiration " href="https://github.com/PhinesTech" target="_blank" rel="noopener noreferrer">>
            PhinesTech{' '}
        </a>
        <div>{`${userId}'s accessToken is ${accessToken}`}</div>
    </section>


    );
};

export default Profile;
