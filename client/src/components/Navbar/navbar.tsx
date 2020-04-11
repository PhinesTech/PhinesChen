import React from 'react';
import { Link } from 'react-router-dom';

import MCFB from '../../assets/images/mcfb-updated-colors2-resized.png';
import './navbar.scss';

const styles = {
    width: '100px',
    height: '40px',
};

const Navbar: React.FC = () => {
    return (
        <nav className="navbar bg-yellow-600 flex-1 flex sm:items-stretch sm:justify-start sticky">
            <div className="mcfb-logo ">
                <img src={MCFB} style={styles} alt="MCFB LOGO" />
            </div>

            <div className="block flex-auto justify-center">
                <ul className="flex justify-center">
                    <li className="mr-3 ">
                        <a
                            className="inline-block rounded font-bold hover:text-gray-400 text-gray-100 hover:bg-green-900 py-2 px-3"
                            href="#"
                        >
                            ABOUT
                        </a>
                    </li>
                    <li className="mr-3">
                        <a
                            className="inline-block rounded font-bold hover:text-gray-400 text-gray-100 hover:bg-green-900 py-2 px-3"
                            href="#"
                        >
                            FIND FOOD
                        </a>
                    </li>
                    <li className="mr-3">
                        <a
                            className="inline-block rounded font-bold hover:text-gray-400 hover:bg-green-900 py-2 px-3 text-gray-100 "
                            href="#"
                        >
                            PROGRAM
                        </a>
                    </li>
                    <li className="mr-3">
                        <a
                            className="inline-block rounded font-bold hover:text-gray-400  hover:bg-green-900 py-2 px-3 text-gray-100 "
                            href="#"
                        >
                            VOLUNTEER
                        </a>
                    </li>
                    <li>
                        <a
                            className="inline-block rounded font-bold hover:text-gray-400 hover:bg-green-900 py-2 px-3 text-gray-100 "
                            href="#"
                        >
                            CONTACT US
                        </a>
                    </li>
                    <li className=" mr-3">
                        <a
                            className="inline-block rounded font-bold hover:text-gray-400 hover:bg-green-900 py-2 px-3 text-gray-100 "
                            href="#"
                        >
                            DONATE
                        </a>
                    </li>
                    <li className="login mr-3 relative inset-y-0 right-0 top-auto left-auto hover:text-gray-400  bottom-auto flex items-center pr-2 sm:ml-6 sm:pr-0">
                        <Link
                            className=" inline-block font-bold hover:border rounded hover:border-black hover:text-gray-400 hover:bg-green-900 py-2 px-3 text-gray-100 "
                            to="login"
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
