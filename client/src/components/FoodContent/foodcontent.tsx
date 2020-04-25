import React from 'react';

import Map from '../Map/map';
import './foodcontent.scss';

const FoodContent: React.FC = () => {
    return (
        <section className="FOODCONTENT">
            <div className="foodcontext ">
                <h2>UPDATE</h2>
                <h1>
                    We are doing our best to keep this list accurate and up-to-date.
                    <br /> Please, call us for any questions.
                </h1>
            </div>
            <div className="foodmap ">
                <h2>Map</h2>
                <h1>Food Distribution Locations</h1>
                <br />
                <span className="map">
                    <Map style="mapbox://styles/mapbox/streets-v9" lng={2} lat={3} zoom={1} />
                </span>
            </div>
            <div className="maptitle">
                <br />
                <h1>Locations Near You</h1>
                <br />
            </div>
            <div className="locationboxes">
                <div className="element">
                    <div className="locationbox">
                        <h2>APOSTOLIC TABERNACLE</h2>
                        <p>
                            2745 E. Highway 140 <br />
                            Merced, California
                            <br />
                            (209) 723-0545
                            <br />
                            Monday, Wednesday 10 AM – 1 PM <br />
                            Friday 10 AM – 12 PM
                        </p>
                    </div>
                </div>
                <div className="element">
                    <div className="locationbox">
                        <h2>CALVARY ASSEMBLY OF GOD </h2>
                        <p>
                            21021 R Street <br />
                            Merced, California
                            <br />
                            (209) 723-2395
                            <br />
                            Food giveaway 3rd and 4th Thursday <br />
                            Wednesday, and Friday
                        </p>
                    </div>
                </div>
                <div className="element">
                    <div className="locationbox">
                        <h2>ST. VINCENT DE PAUL</h2>
                        <p>
                            131 W. Main Street <br />
                            Merced, California
                            <br />
                            (209) 723-2404
                            <br />
                            Sack lunches every Monday, <br />
                            12 PM – 12:30 PM
                        </p>
                    </div>
                </div>
            </div>
            <div className="locationboxes">
                <div className="element">
                    <div className="locationbox">
                        <h2>CATHOLIC CHARITIES</h2>
                        <p>
                            336 W. Main Street
                            <br />
                            Merced, California
                            <br />
                            (209) 383-2494
                            <br />
                            Food giveaway Tuesday 9AM – 12PM <br />
                            Thursday and Friday 9 AM – 3 PM
                        </p>
                    </div>
                </div>
                <div className="element">
                    <div className="locationbox">
                        <h2>SALVATION ARMY</h2>
                        <p>
                            1231 4th Street <br />
                            Los Banos, CA
                            <br />
                            (209) 827-4945
                            <br />
                            Call for information
                            <br />
                        </p>
                    </div>
                </div>
                <div className="element">
                    <div className="locationbox">
                        <h2>MANNA HOUSE</h2>
                        <p>
                            5127 Charles Street
                            <br />
                            Mariposa, CA 95338
                            <br />
                            (209) 742-7985
                            <br />
                            Monday – Friday, 10AM – 2PM
                        </p>
                    </div>
                </div>
            </div>
            <div className="locationboxes">
                <div className="element">
                    <div className="locationbox">
                        <h2>ASSEMBLY OF GOD</h2>
                        <p>
                            5265 Highway 49N
                            <br />
                            Mariposa, CA 95338br/> (209) 966-2249
                            <br />
                            Wednesday, 7:30AM – 9:30AM <br />
                            Friday 10 AM – 12 PM
                        </p>
                    </div>
                </div>
                <div className="element">
                    <div className="locationbox">
                        <h2>Lifeline CDC </h2>
                        <p>
                            7081 N. Winton Way <br />
                            Winton, CA 95388
                            <br />
                            (209) 358-6939
                            <br />
                            Call for Information <br />
                        </p>
                    </div>
                </div>
                <div className="element">
                    <div className="locationbox">
                        <h2>Delhi Presbyterian Church</h2>
                        <p>
                            15917 El Capitan Way
                            <br />
                            Delhi, CA 95315
                            <br />
                            (209) 667-8746
                            <br />
                            Tuesday-Friday, 9AM – 12PM <br />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodContent;
