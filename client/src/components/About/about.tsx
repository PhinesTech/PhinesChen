import React from 'react';
import './about.scss';
import FOODBANK from "../../assets/images/Day+2+Merced+Food+Bank+(2).jpg";
import BREAD from "../../assets/images/AK Senior Brown Bags 1.jpg";


const About: React.FC = () => {
    return (
        <section className="ABOUT">
            <div className="believe">
                <h2>
                    WHAT WE BELIEVE IN
                </h2>
                <h1>
                    Our mission is to improve the health and <br/> well-being 
                    of Merced and Mariposa <br/> County residents affected by 
                    hunger; <br/> through the acquisition, storage, and distribution 
                    <br/> of nutritionous food.
                </h1>
                <br/>
            </div>
            <hr/>
            
            <div className="WhoWeAre">
                <br/>
                <h2>
                    ABOUT
                    </h2>
                <h1>
                    Who We Are
                </h1>
                <span>
                    <img src={FOODBANK} alt="FoodBank">

                    </img>
                </span>
                <br/> 
                <p>
                To fulfill our mission, we source and distribute food, and other 
                products to those in need <br/> with the help of partnering agencies and 
                MCFB programs. We also conduct hunger <br/> education and awareness campaings 
                and advocate for public policies that alleviate hunger.
                </p>
            </div>
            <div className="WhatWeDo">
                <br/>
                <h2>
                    TEAM
                    </h2>
                <h1>
                    What We Do
                </h1>
                <span>
                    <img src={BREAD} alt="FoodBank">

                    </img>
                </span>
                <br/> 
                <p>
                In our rural service area of 3,442 square miles, we served low-income individuals 
                and <br/> families at 83 community sites; 24 USDA commidities food distribution sites; 
                16 senior <br/> citizen sites; and we make food available for over 100 other nonprofit 
                organizations <br/> serving people in need.
                </p>

            </div>


        </section>

        );
    };
    
    export default About;