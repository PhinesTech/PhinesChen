import React from 'react';
import DONATELOGO from '../../assets/images/HmPgIcon-Donate2.png';
import BASKETLOGO from '../../assets/images/basketicon.png';

import './donateform.scss';

const DonateMoneyForm: React.FC = () => {
    return (
        <section className="DONATEFORM">
            <div className="center2">
                <div className="right">
                    <div className="title">Donate Form</div>
                    <div className="description">
                        Alongside your generous donation, join Merced County Food Bank and round up the change on your
                        purchases to the nearest dollar.
                    </div>
                    <div className="DONATELOGO">
                        <img id="donate-logo2" className="grid-item-image" src={DONATELOGO} alt="Donate" />
                    </div>
                    <div className="BASKETLOGO">
                        <img id="donate-logo2" className="grid-item-image" src={BASKETLOGO} alt="Donate" />
                    </div>
                    <button className="statusbutton" type="button">
                        Donate Status: Pending
                    </button>
                    <br />
                    <button className="cashbutton" type="button">
                        $50
                    </button>
                    <button className="cashbutton" type="button">
                        $100
                    </button>
                    <button className="cashbutton" type="button">
                        $200
                    </button>
                    <button className="cashbutton" type="button">
                        $500
                    </button>
                    <button className="cashbutton" type="button">
                        $1000
                    </button>
                    <form className="form">
                        <h2>Bill Form</h2>
                        <div className="description">
                        Merced County Food Bank puts the power of spare change to work 
                        toward feeding hungry families. Just sign up once and start making 
                        purchases. Your small investments over time will make a world of 
                        difference. 
                        </div>
                        <div className="form__field3">
                            <div className="input-group3">
                                <label className="input-group__label">Amount</label>
                                <input className="input-group__input" type="text" placeholder="  $50.00" />
                            </div>
                            <div className="input-group3">
                                <label className="input-group__label">Cardholder Name</label>
                                <input className="input-group__input" type="text" placeholder="  Full Name" />
                            </div>
                            <div className="input-group3">
                                <label className="input-group__label">Card Number</label>
                                <input className="input-group__input" type="email" placeholder="  1234 5678 9123" />
                            </div>
                            <div className="form__field4">
                                <div className="input-group3">
                                    <label className="input-group__label">Expiration Date</label>
                                    <input
                                        className="input-group__input"
                                        type="text"
                                        placeholder="  Expiration (MM/YY)"
                                    />
                                </div>
                                <div className="input-group3">
                                    <label className="input-group__label">CVV Code</label>
                                    <input className="input-group__input" type="text" placeholder="  123" />
                                </div>
                            </div>
                        </div>

                        <button className="donatebutton" type="button">
                            Donate
                        </button>
                    </form>

                    <form className="form">
                        <h2>Food Form</h2>
                        <div className="description">
                            The Merced County Food Bank has a need for more than food. When thinking of ways to donate,
                            remember that any food you eat or product you use to get you through the day are the types
                            of products that could potentially be donated..
                        </div>
                        <br />
                        <div className="form__field">
                            <div className="input-group">
                                <label className="input-group__label">Company Name</label>
                                <input className="input-group__input" type="text" />
                            </div>
                            <div className="input-group">
                                <label className="input-group__label">Mailing Address</label>
                                <input className="input-group__input" type="text" />
                            </div>
                            <div className="input-group">
                                <label className="input-group__label">Reason for Donation</label>
                                <input className="input-group__input" type="text" />
                            </div>
                            <div className="input-group">
                                <label className="input-group__label">Storage Requirements</label>
                                <input className="input-group__input" type="text" />
                            </div>
                            <div className="input-group">
                                <label className="input-group__label">Number of Units, Pounds, Cases</label>
                                <input className="input-group__input" type="number" />
                            </div>
                        </div>

                        <div className="form__field1">
                            <div className="input-group">
                                <label className="input-group__label">Contact Name</label>
                                <input className="input-group__input" type="text" />
                            </div>

                            <div className="input-group">
                                <label className="input-group__label">Phone Number</label>
                                <input className="input-group__input" type="text" />
                            </div>
                            <div className="input-group">
                                <label className="input-group__label">Product Description</label>
                                <input className="input-group__input" type="text" />
                            </div>
                            <div className="input-group">
                                <label className="input-group__label">Packaging Details</label>
                                <input className="input-group__input" type="text" />
                            </div>

                            <div className="input-group">
                                <label className="input-group__label">List of Ingredients</label>
                                <input className="input-group__input" type="text" />
                            </div>
                        </div>
                        <button className="donatebutton2" type="button">
                            Donate
                        </button>
                    </form>
                </div>
            </div>

            <a className="inspiration " href="https://github.com/PhinesTech" target="_blank" rel="noopener noreferrer">
                PhinesTech{' '}
            </a>
        </section>
    );
};

export default DonateMoneyForm;
