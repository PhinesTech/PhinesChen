import React from 'react';

import './requestform.scss';
import REQUESTLOGO from "../../assets/images/request.png";

const RequestForm: React.FC = () => {
    return (
        <section className="REQUESTFORM">
            <div className="center">
                <div className="right">
                    <div className="title">Request Form</div>
                    <div className="description">The information provided from this form only will be seen by 
                    the staff responsible for the food distribution.
                    Personal information will be kept confidential. Please, provide the food you need in the description box. </div>
                    <div className="REQUESTLOGO">
                        <img id="donate-logo2" className="grid-item-image" src={REQUESTLOGO} alt="Donate" />
                        </div>
                        <button className="statusbutton" type="button">
                        Request Status: Pending
                        </button>
                       
                         <form className="form">
                        <div className="form__field">
                        <div className="input-group">
                                <label className="input-group__label">Date</label>
                                <input className="input-group__input" type="text" />
                            </div>
                        <div className="input-group">
                                <label className="input-group__label">Pantry ID</label>
                                <input className="input-group__input" type="text"  />
                            </div>
                           
                            
                            <div className="input-group">
                                <label className="input-group__label">Address</label>
                                <input className="input-group__input" type="text" />
                            </div>
                            <div className="input-group1">
                                <label className="input-group__label">Food Request Description</label>
                                <input className="input-group__input" type="text" />
                               
                            </div>
                            </div>
                            <div className="form__field1">
                            <div className="input-group">
                                <label className="input-group__label">Household Size</label>
                                <input className="input-group__input" type="text" />
                            </div>
                            
                            
                            <div className="input-group">
                                <label className="input-group__label">Dietary Restrictions</label>
                                <input className="input-group__input" type="text" />
                            </div>
                            <div className="input-group">
                                <label className="input-group__label">Allergies</label>
                                <input className="input-group__input" type="text" />
                               
                            </div>
                            
                            
                        </div>
                        </form>
                        
                       
                        <button className="requestbutton" type="button">
                            Submit
                        </button>
                   
                </div>
            </div>

            <a className="inspiration " href="https://github.com/PhinesTech" target="_blank">
                PhinesTech{' '}
            </a>
        </section>
    );
};

export default RequestForm;