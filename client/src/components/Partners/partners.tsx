import React from 'react';
import PARTNERS from "../../assets/images/partnersbg.jpg"

import './partners.scss';

const Partners: React.FC = () => {
    return (
        <section className="PARTNERS">
             <br />
                <br />
                <br />
                <h1>Our Partners</h1>
                <div className="partnerslogos ">
                    <br></br>
                    <img src={PARTNERS} alt="PARTNERS">

                    </img>
                </div>
        </section>

        );
    };
    
export default Partners;