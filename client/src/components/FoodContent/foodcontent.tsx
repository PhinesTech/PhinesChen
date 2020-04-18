import React from 'react';
import FOODMAP from './../../assets/images/foodmap.png';
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
                <span className="map">
                    <img src={FOODMAP} alt="FOODMAP"></img>
                </span>
            </div>
            <div className="maptitle">
            <br/>
            <h1>Locations Near You</h1>
            <br/>
            </div>
            <div className="locationboxes">
                
            <div className="element">
                <div className="locationbox" >
                <h2>APOSTOLIC TABERNACLE</h2>
                <p>
                2745 E. Highway 140	<br/>
                Merced, California<br/>
                (209) 723-0545<br/>
                Monday, Wednesday 10 AM – 1 PM	<br/>
                Friday 10 AM – 12 PM
                </p>
                </div>
            </div>
            <div className="element">
                <div className="locationbox" ></div>
            </div>
            <div className="element">
                <div className="locationbox" ></div>
            </div>
            </div>
            <div className="locationboxes">
            <div className="element">
                <div className="locationbox" ></div>
            </div>
            <div className="element">
                <div className="locationbox" ></div>
            </div>
            <div className="element">
                <div className="locationbox" ></div>
            </div>
            </div>
            <div className="locationboxes">
            <div className="element">
                <div className="locationbox" ></div>
            </div>
            <div className="element">
                <div className="locationbox" ></div>
            </div>
            <div className="element">
                <div className="locationbox" ></div>
            </div>
            </div>
        </section>
    );
};

export default FoodContent;
