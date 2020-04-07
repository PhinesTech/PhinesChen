import React from 'react';
import MCFB from '../../assets/images/mcfb-updated-colors2-resized.png';

const styles = {
    width: '110px',
    height: '50px',
};

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="mcfb-logo flex-shrink-0">
                <img src={MCFB} style={styles} alt="MCFB LOGO" />
            </div>

            <div className="block sm:ml-6 sm:mt-3 flex-auto justify-center">
                <ul className="flex justify-center">
                    <li className="mr-3 ">
                        <a className="inline-block  text-gray-400 hover:bg-gray-500 py-2 px-3" href="#">
                            ABOUT
                        </a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block  text-gray-400 hover:bg-gray-500 py-2 px-3" href="#">
                            WORK
                        </a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block text-gray-400 hover:bg-gray-500 py-2 px-3 text-gray-400 " href="#">
                            PROGRAM
                        </a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block text-gray-400 hover:bg-gray-500 py-2 px-3 text-gray-400 " href="#">
                            VOLUNTEER
                        </a>
                    </li>
                    <li>
                        <a className="inline-block text-gray-400 hover:bg-gray-500 py-2 px-3 text-gray-400 " href="#">
                            CONTACT US
                        </a>
                    </li>
                    <li className="mr-3 relative lg:absolute inset-y-0 right-0 top-auto left-auto bottom-auto flex items-center pr-2 sm:ml-6 sm:pr-0 lg:right-5">
                        <a className="inline-block text-gray-400 hover:bg-gray-500 py-2 px-3 text-gray-400 " href="#">
                            DONATE
                        </a>
                    </li>
                    <li className="mr-3 relative lg:absolute inset-y-0 right-0 top-auto left-auto bottom-auto flex items-center pr-2 sm:ml-6 sm:pr-0">
                        <a
                            className=" inline-block border border-white rounded hover:border-black text-gray-400 hover:bg-gray-500 py-2 px-3 text-gray-400 "
                            href="#"
                        >
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
