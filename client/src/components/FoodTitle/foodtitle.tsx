import React from 'react';


import './foodtitle.scss';


const FoodTitle: React.FC = () => {
    return (
       
        <section className="FOODTITLE">
        <div className="font-black FOOD-TITLE-TEXT">
            Food Locator <br />
        </div>
        <div className="food-title-subtext">Merced County Food Bank > Find Food</div>
     
    </section>
        );
    };
    
export default FoodTitle;