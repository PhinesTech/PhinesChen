import React, { Component, ChangeEvent } from 'react';
import axios from 'axios';

import REQUESTLOGO from '../../assets/images/request.png';
import './donateFoodForm.scss';
import { DonateFoodFormProps, DonateFoodFormState } from './donateFoodForm.types';

const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODcyOTA4MTUsImlhdCI6MTU4NzI4OTkxNSwic3ViIjoiNWU4ZWEwMzdhNzJjNDAwMDFiNWE1MmY5In0.EjcEGnJl-qUX7brzaFWqQlnKDQq8O4j8hGg7PHMISMg';

class DonateFoodForm extends Component<DonateFoodFormProps, DonateFoodFormState> {
    state = {
        name: '',
        quantity: 1,
    };

    constructor(props: any) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event: any) {
        event.preventDefault();

        axios
            .post(
                'http://localhost:3001/v1/request/',
                {
                    body: {
                      name: this.state.name,
                      quantity: this.state.quantity
                    },
                },
                {
                    headers: {
                        Authorization: `Basic ${token}`,
                    },
                },
            )
            .then((response: any) => {
                console.log(response);
            });
    }

    render() {
        const { name, quantity } = this.state;

        return (
            <section className="REQUESTFORM">
                <div className="center6">
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

                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="form__field">
                                <div className="input-group">
                                    <label className="input-group__label">Food Name</label>
                                    <input
                                        className="input-group__input"
                                        type="text"
                                        value={name}
                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                            this.setState({ name: event.target.value })
                                        }
                                       
                                    />
                                </div>
                            </div>
                            <div className="form__field1">
                                <div className="input-group">
                                    <label className="input-group__label">Quantity</label>
                                    <input
                                        className="input-group__input"
                                        type="number"
                                        value={quantity}
                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                            this.setState({ quantity: Number(event.target.value) })
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
                    > PhinesTech{' '}
                </a>
            </section>
        );
    }
}

export default DonateFoodForm;
