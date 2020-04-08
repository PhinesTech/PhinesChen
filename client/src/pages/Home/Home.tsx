import React from 'react';

import Title from '../../components/Title/title';
import Navbar from '../../components/Navbar/navbar';
import About from '../../components/About/about';

const Home: React.FC = () => {
    return (
        <div className="bg-gray-500">
            <Navbar/>
            <Title/>
            <About/>
         
        </div>
    )
}

export default Home;