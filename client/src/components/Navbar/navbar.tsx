import React from 'react';
import MCFB from '../../assets/images/mcfb-updated-colors2-resized.png'

const styles = {
    width: '110px',
    height: '50px',
    
};

const Navbar: React.FC = () => {
    return (
        <nav>
            
           
            <ul className="flex bg-black text-xs navbar">
            
            <div className="flex mcfb-logo relative flex-row justify-start">
                <img src={MCFB} style={styles} alt="MCFB LOGO"/>
            </div>

            <li className="mr-3 ">
                <a className="inline-block  text-gray-400 hover:bg-gray-500 py-2 px-3" href="#">ABOUT</a>
            </li>
            <li className="mr-3">
                <a className="inline-block  text-gray-400 hover:bg-gray-500 py-2 px-3" href="#">WORK</a>
            </li>
            <li className="mr-3">
                <a className="inline-block text-gray-400 hover:bg-gray-500 py-2 px-3 text-gray-400 " href="#">PROGRAM</a>
            </li>
            <li className="mr-3">
                <a className="inline-block text-gray-400 hover:bg-gray-500 py-2 px-3 text-gray-400 " href="#">VOLUNTEER</a>
            </li>
            <li className="mr-3">
                <a className="inline-block text-gray-400 hover:bg-gray-500 py-2 px-3 text-gray-400 " href="#">CONTACT US</a>
            </li>
            <li className="mr-3 flex-row-reverse">
                <a className=" inline-block text-gray-400 hover:bg-gray-500 py-2 px-3 text-gray-400 " href="#">DONATE</a>
            </li>
            <li className="mr-3 flex-row-reverse">
                <a className=" inline-block border border-white rounded hover:border-black text-gray-400 hover:bg-gray-500 py-2 px-3 text-gray-400 " href="#">Login</a>
            </li>
            </ul>
      
           
            
            
        
        </nav>
    )
}

export default Navbar;