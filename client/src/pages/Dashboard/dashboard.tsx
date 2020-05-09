import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import { DashboardProps, DashboardState, RequestsModel, DonationModel } from './dashboard.types';
import Admin from '../../components/Admin/admin';
import Storage from '../../components/Storage/storage';
import DonateForm from '../../components/DonateForm/donateform';
import RequestForm from '../../components/RequestForm/requestForm';
import Profile from '../../components/Profile/profile';
import Track from '../../components/Track/track';
import './dashboard.scss';

class Dashboard extends Component<DashboardProps, DashboardState> {
    state = {
        dashboard: '',
        storage: [],
        requests: [],
        donations: [],
    };

    componentDidMount() {
        const { token, user } = this.props.location.state;

        if (user.role === 'admin') {
            Axios.all([
                Axios.get<Array<Object>>('http://localhost:3001/v1/food', {
                    headers: {
                        Authorization: `Bearer ${token.accessToken}`,
                    },
                }),
                Axios.get<Array<RequestsModel>>('http://localhost:3001/v1/request', {
                    headers: {
                        Authorization: `Bearer ${token.accessToken}`,
                    },
                }),
                Axios.get<Array<DonationModel>>('http://localhost:3001/v1/donation', {
                    headers: {
                        Authorization: `Bearer ${token.accessToken}`,
                    },
                }),
            ]).then(
                Axios.spread((storage, requests, donations) => {
                    this.setState({
                        storage: storage.data,
                        requests: requests.data,
                        donations: donations.data,
                    });
                }),
            );
        }
    }

    render() {
        const { user } = this.props.location.state;
        const { dashboard } = this.state;

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
                                        <Link to="/">Home</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="contacticon">
                                        <button onClick={() => this.setState({ dashboard: '' })}>Profile</button>
                                    </div>
                                </li>
                                <li>
                                    <div className="feedicon">
                                        <button onClick={() => this.setState({ dashboard: 'track' })}>Track</button>
                                    </div>
                                </li>
                                {user.role === 'admin' ? (
                                    <li>
                                        <div className="contacticon">
                                            <button onClick={() => this.setState({ dashboard: 'admin' })}>Admin</button>
                                        </div>
                                    </li>
                                ) : null}
                                {user.role === 'admin' ? (
                                    <li>
                                        <div className="requesticon">
                                            <button onClick={() => this.setState({ dashboard: 'storage' })}>
                                                Storage
                                            </button>
                                        </div>
                                    </li>
                                ) : null}
                                <li>
                                    <div className="donateicon">
                                        <button onClick={() => this.setState({ dashboard: 'donate' })}>Donate</button>
                                    </div>
                                </li>
                                <li>
                                    <div className="requesticon">
                                        <button onClick={() => this.setState({ dashboard: 'request' })}>Request</button>
                                    </div>
                                </li>
                                <li>
                                    <div className="contacticon">Contact</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {(() => {
                    switch (dashboard) {
                        case 'donate':
                            return <DonateForm {...this.props} />;
                        case 'request':
                            return <RequestForm {...this.props} />;
                        case 'track':
                            return <Track {...this.props} />;
                        case 'admin':
                            return <Admin requests={this.state.requests} donations={this.state.donations} />;
                        case 'storage':
                            return <Storage storage={this.state.storage} />;
                        default:
                            return <Profile {...this.props} />;
                    }
                })()}
            </section>
        );
    }
}

export default Dashboard;
