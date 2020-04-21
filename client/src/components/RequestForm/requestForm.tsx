import React, { Component, ChangeEvent } from 'react';
import Axios from 'axios';

import REQUESTLOGO from '../../assets/images/request.png';
import './requestForm.scss';
import { RequestFormProps, RequestFormState } from './requestForm.types';

class RequestForm extends Component<RequestFormProps, RequestFormState> {
    state = {
        householdSize: 1,
        dietaryRestrictions: '',
        allergies: '',
        address: {
            street: '',
            city: '',
            zip: 90000,
        },
    };

    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event: any) {
        event.preventDefault();

        Axios.post('http://localhost:3001/v1/request/', this.state, {
            headers: {
                Authorization: `Bearer ${this.props.location.state.token.accessToken}`,
            },
        }).then((response: any) => {
            console.log(response);
        });
    }

    render() {
        const { dietaryRestrictions, allergies, address } = this.state;

        return (
            <section className="REQUESTFORM">
                <div className="center5">
                    <div className="right">
                        <div className="title">Request Form</div>
                        <div className="description">
                            The information provided from this form only will be seen by the staff responsible for the
                            food distribution. Personal information will be kept confidential. Please, provide the food
                            you need in the description box.{' '}
                        </div>
                        <div className="REQUESTLOGO">
                            <img id="donate-logo2" className="grid-item-image" src={REQUESTLOGO} alt="Donate" />
                        </div>
                        <button className="statusbutton" type="button">
                            Request Status: Pending
                        </button>

                        <form className="form" onSubmit={this.handleSubmit} autoComplete="off">
                            <div className="form__field">
                                <div className="input-group">
                                    <label className="input-group__label">Household Size</label>
                                    <input
                                        className="input-group__input"
                                        type="number"
                                        min="1"
                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                            this.setState({ householdSize: Number(event.target.value) })
                                        }
                                    />
                                </div>
                                <div className="input-group">
                                    <label className="input-group__label">Dietary Restrictions</label>
                                    <input
                                        className="input-group__input"
                                        type="text"
                                        value={dietaryRestrictions}
                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                            this.setState({ dietaryRestrictions: event.target.value })
                                        }
                                    />
                                </div>
                                <div className="input-group">
                                    <label className="input-group__label">City</label>
                                    <input
                                        className="input-group__input"
                                        type="text"
                                        value={address.city}
                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                            this.setState({ address: { ...address, city: event.target.value } })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="form__field1">
                                <div className="input-group">
                                    <label className="input-group__label">Allergies</label>
                                    <input
                                        className="input-group__input"
                                        type="text"
                                        value={allergies}
                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                            this.setState({ allergies: event.target.value })
                                        }
                                    />
                                </div>

                                <div className="input-group">
                                    <label className="input-group__label">Street Address</label>
                                    <input
                                        className="input-group__input"
                                        type="text"
                                        value={address.street}
                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                            this.setState({ address: { ...address, street: event.target.value } })
                                        }
                                    />
                                </div>

                                <div className="input-group">
                                    <label className="input-group__label">Zipcode</label>
                                    <input
                                        className="input-group__input"
                                        type="number"
                                        min="10000"
                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                            this.setState({ address: { ...address, zip: Number(event.target.value) } })
                                        }
                                    />
                                </div>
                            </div>
                            <button className="requestbutton" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <a
                    className="inspiration "
                    href="https://github.com/PhinesTech"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    PhinesTech{' '}
                </a>
            </section>
        );
    }
}

export default RequestForm;
