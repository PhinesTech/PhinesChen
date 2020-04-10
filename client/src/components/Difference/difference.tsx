import React from 'react';
import DONATELOGO from '../../assets/images/HmPgIcon-Donate2.png'
import VOLUNTEERLOGO from '../../assets/images/HmPgIcon-Volunteer1.png';
import PARTNERLOGO from '../../assets/images/HmPgIcon-Partner1.png';


import './difference.scss';

const Difference: React.FC = () => {
    return (
        <section className="DIFFERENCE">
            <br />
            <h1>How You Can Make A Difference</h1>
            <div className="THREELOGOS">
            <div className="grid-container">
                <img id="donate-logo" className="grid-item-image" src={DONATELOGO} alt="Donate" />
                <h3 className="grid-item-title">Donate</h3>
                </div>
                <div className="grid-container">
                <img id="volunteer-logo" className="grid-item-image" src={VOLUNTEERLOGO} alt="Volunteer" />
                <h3 className="grid-item-title">Volunteer</h3>
                </div>
                <div className="grid-container">
                <img id="partner-logo" className="grid-item-image" src={PARTNERLOGO} alt="Partner" />
                <h3 className="grid-item-title">Become A Partner</h3>
                </div>
                </div>
        </section>
    );
};

export default Difference;
