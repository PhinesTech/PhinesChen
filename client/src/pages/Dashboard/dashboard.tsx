import React from 'react';
import { Link } from 'react-router-dom';

import './dashboard.scss';
import Admin from '../../components/Admin/admin';
// import DonateForm from "../../components/DonateForm/donateform";
// import RequestForm from "../../components/RequestForm/requestform";
// import Profile from '../../components/Profile/profile';

// let activeDashboard = 0;

// function dashboardView(dash: number) {
//     switch (dash) {
//         // case 0:
//         //     return <Profile/>
//         // case 1:
//         //     return <Donation/>
//         // case 2:
//         //     return <Request/>
//         case 3:
//             return <Admin />;
//         default:
//             return <Profile />;
//     }
// }

const Dashboard: React.FC = () => {
    return (
        <section className="DASHBOARD">
            <div className="center">
                <div className="left">
                    <div className="dashboardlogo"></div>
                    <div className="company">
                        <div className="company-name">
                            Merced County <br /> Food Bank
                        </div>
                        <div className="company-description">Welcome, Admin </div>
                    </div>
                    <div className="navigation">
                        <ul>
                            <li>
                                <div className="homeicon">
                                    {' '}
                                    <Link to="/">Home</Link>
                                </div>
                            </li>
                            <li>
                                <div className="contacticon">
                                {' '}
                                <Link to="/admin">Admin</Link>
                                </div>
                            </li>
                            <li>
                                <div className="donateicon">
                                {' '}
                                <Link to="/requestform">Donate</Link>
                                </div>
                            </li>
                            <li>
                                <div className="requesticon">
                                {' '}
                                <Link to="/requestform">Request</Link>
                                </div>
                            </li>
                            <li>
                                <div className="contacticon">Contact</div>
                                {' '}
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* {dashboardView(activeDashboard)} */}
            <Admin />
        </section>
    );
};

export default Dashboard;
