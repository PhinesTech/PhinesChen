import React from 'react';

import Title from '../../components/Title/title';
import Navbar from '../../components/Navbar/navbar';

const Home: React.FC = () => {
    return (
        <div className="bg-gray-500">
            <Navbar/>
            <Title/>
         
        </div>
    )
}

export default Home;