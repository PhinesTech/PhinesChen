import React from 'react';
import MCFB from '../../assets/images/mcfb-updated-colors2-resized.png'

const styles = {
    width: '110px',
    height: '50px',
    
};

const Navbar: React.FC = () => {
    return (
        <nav>
            
           
            <ul className="flex bg-gray-900 ">
            
            <div className="flex mcfb-logo relative flex-row justify-start">
                <img src={MCFB} style={styles} alt="MCFB LOGO"/>
            </div>

            <li className="mr-3 ">
                <a className="inline-block  text-white hover:bg-gray-500 py-2 px-3" href="#">About</a>
            </li>
            <li className="mr-3">
                <a className="inline-block  text-white hover:bg-gray-500 py-2 px-3" href="#">Work</a>
            </li>
            <li className="mr-3">
                <a className="inline-block text-white hover:bg-gray-500 py-2 px-3 text-gray-400 " href="#">Program</a>
            </li>
            <li className="mr-3">
                <a className="inline-block text-white hover:bg-gray-500 py-2 px-3 text-gray-400 " href="#">Volunteer</a>
            </li>
            <li className="mr-3">
                <a className="inline-block text-white hover:bg-gray-500 py-2 px-3 text-gray-400 " href="#">Contact Us</a>
            </li>
            <li className="mr-3 flex-row-reverse">
                <a className=" inline-block text-white hover:bg-gray-500 py-2 px-3 text-gray-400 " href="#">DONATE</a>
            </li>
            <li className="mr-3 flex-row-reverse">
                <a className=" inline-block border border-black rounded hover:border-black text-white hover:bg-gray-500 py-2 px-3 text-gray-400 " href="#">Login</a>
            </li>
            </ul>
      
           
            
            
        
        </nav>
    )
}

export default Navbar;