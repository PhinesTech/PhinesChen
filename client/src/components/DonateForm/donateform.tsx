import React from 'react';

import './donateform.scss';
import DONATELOGO from "../../assets/images/HmPgIcon-Donate2.png";

const DonateForm: React.FC = () => {
    return (
        <section className="DONATEFORM">
            <div className="center">
                <div className="right">
                    <div className="title">Donate Form</div>
                    <div className="description">Alongside your generous donation, join Merced County Food Bank and round up the change on your purchases to the nearest dollar.</div>
                    <div className="DONATELOGO">
                        <img id="donate-logo2" className="grid-item-image" src={DONATELOGO} alt="Donate" />
                        </div>
                        <button className="statusbutton" type="button">
                        Donate Status: Pending
                        </button>
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
                        <div className="form__field">
                        <div className="input-group">
                                <label className="input-group__label">Amount</label>
                                <input className="input-group__input" type="text"  placeholder="  $50.00"/>
                            </div>
                            <div className="input-group">
                                <label className="input-group__label">Cardholder Name</label>
                                <input className="input-group__input" type="text"  placeholder="  Full Name"/>
                            </div>
                            <div className="input-group">
                                <label className="input-group__label">Card Number</label>
                                <input className="input-group__input" type="email" placeholder="  1234 5678 9123"/>
                            </div>
                            <div className="input-group">
                                <label className="input-group__label">Expiration Date</label>
                                <input className="input-group__input" type="text"  placeholder="  Expiration (MM/YY)" />
                               
                            </div>
                            <div className="input-group">
                                <label className="input-group__label">Security Code</label>
                                <input className="input-group__input" type="text" placeholder="  123"/>
                            </div>
                        </div>
                      
                        <button className="donatebutton" type="button">
                            Donate
                        </button>
                    </form>
                </div>
            </div>

            <a className="inspiration " href="https://github.com/PhinesTech" target="_blank">
                PhinesTech{' '}
            </a>
        </section>
    );
};

export default DonateForm;
