import React from 'react';

import Map from '../Map/map';
import './track.scss';

const FoodLocationData = require('../../pages/FoodLocator/FoodLocatorData.json');

const Track: React.FC = () => {
    return (
        <section className="TRACK">
            <div className="center8">
                <div className="right">
                    <div className="title">Dashboard</div>
                    <div className="description">Track your requests </div>
                    <span className="map">
                        <Map
                            mapStyle="mapbox://styles/adarian/ck9qt77ja2g6t1ipbaxv5o1pu"
                            lng={-120.483}
                            lat={37.3022}
                            zoom={10}
                            data={FoodLocationData}
                        />
                    </span>

                    <div className="row">
                            <div className="half">
                                <div className="sub-title">Your Previous Requests</div>
                                <div id="app">
                                <div className="app-wrapper">

                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="inspiration " href="https://github.com/PhinesTech" target="_blank" rel="noopener noreferrer">
                PhinesTech{' '}
            </a>
        </section>
    );
};

export default Track;
