import React from 'react';

import Title from '../../components/Title/title';
import Navbar from '../../components/Navbar/navbar';
import About from '../../components/About/about';
import Difference from '../../components/Difference/difference';
import News from '../../components/News/news';
import Donate from '../../components/Donate/donate';
import Partners from '../../components/Partners/partners';
import Footer from '../../components/Footer/footer';

const Home: React.FC = () => {
    return (
        <div className="bg-gray-500">
            <Navbar />
            <Title />
            <About />
            <Difference />
            <News />
            <Donate />
            <Partners />
            <Footer />
        </div>
    );
};

export default Home;
