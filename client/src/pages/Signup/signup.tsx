import React, { Component } from 'react';
import Axios from 'axios';

import history from '../../app.history';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import { SignUpProps, SignUpState } from './signup.types';
import './signup.scss';

class Signup extends Component<SignUpProps, SignUpState> {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        companyName: '',
    };

    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event: any) {
        event.preventDefault();

        const user = {
          name: `${this.state.firstName} ${this.state.lastName}`,
          email: this.state.email,
          companyName: this.state.companyName,
          password: this.state.password
        };

        Axios.post('http://localhost:3001/v1/auth/register', user).then(response => {
            history.push('/dashboard', response.data);
        });
    }

    render() {
        return (
            <section className="">
                <Navbar />
                <div className="SIGNUP">
                    <div className="signup-div">
                        <div className="title">Register</div>
                        <form className="signupform" onSubmit={this.handleSubmit} autoComplete="off">
                            <div className="signupfields">
                                <div className="firstname">
                                    <svg fill="#999" viewBox="0 0 20 20">
                                        <path
                                            className="path1"
                                            d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
                                        ></path>
                                    </svg>
                                    <input
                                        type="text"
                                        className="user-input"
                                        placeholder="First Name"
                                        onChange={event => this.setState({ firstName: event.target.value })}
                                    />
                                </div>
                                <div className="lastname">
                                    <svg fill="#999" viewBox="0 0 20 20">
                                        <path
                                            className="path1"
                                            d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
                                        ></path>
                                    </svg>
                                    <input
                                        type="text"
                                        className="user-input"
                                        placeholder="Last Name"
                                        onChange={event => this.setState({ lastName: event.target.value })}
                                    />
                                </div>
                                <div className="companyname">
                                    <svg fill="#999" viewBox="0 0 20 20">
                                        <path
                                            className="path1"
                                            d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"
                                        ></path>
                                    </svg>
                                    <input
                                        type="text"
                                        className="user-input"
                                        placeholder="Company Name"
                                        onChange={event => this.setState({ companyName: event.target.value })}
                                    />
                                </div>
                                <div className="email">
                                    <svg fill="#999" viewBox="0 0 1024 1024">
                                        <path
                                            className="path1"
                                            d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"
                                        ></path>
                                    </svg>
                                    <input
                                        type="email"
                                        className="user-input"
                                        placeholder="Email"
                                        onChange={event => this.setState({ email: event.target.value })}
                                    />
                                </div>
                                <div className="password1">
                                    <svg fill="#999" viewBox="0 0 1024 1024">
                                        <path
                                            className="path1"
                                            d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"
                                        ></path>
                                    </svg>
                                    <input
                                        type="password"
                                        className="pass-input"
                                        placeholder="Password"
                                        required
                                        onChange={event => this.setState({ password: event.target.value })}
                                    />
                                </div>
                            </div>

                            <button className="submit-button bg-yellow-500" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}

export default Signup;
