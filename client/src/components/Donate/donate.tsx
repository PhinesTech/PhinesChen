import React from 'react';
import './donate.scss';

const Donate: React.FC = () => {
    return (
        <section className="DONATE">
            <div className="NOW">
                <br />
                <br />
                <h1>Donate</h1>
                <br />
                <p>Every $1 donated provided enough food for 4 meals to feed hungry children, seniors and families.</p>
                <br />
                <button className="donatebutton bg-yellow-500 font-bold">DONATE NOW</button>
            </div>
        </section>
    );
};

export default Donate;
