import React from 'react';

import Navbar from '../../components/Navbar/navbar';
import FoodTitle from '../../components/FoodTitle/foodtitle';
import FoodContent from '../../components/FoodContent/foodcontent';
import Footer from '../../components/Footer/footer';

import './foodlocator.scss';


const FoodLocator: React.FC = () => {
    return (
       
        <div className="">
             <Navbar />
             <FoodTitle />
             <FoodContent />
             <Footer />
             </div>
        );
    };
    
export default FoodLocator;