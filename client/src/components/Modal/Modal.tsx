import React, { Component } from 'react';

import { ModalProps } from './Modal.types';
import './Modal.scss';

class Modal extends Component<ModalProps> {
    constructor(props: Readonly<ModalProps>) {
        super(props);
        this.onClose = this.onClose.bind(this);
    }

    onClose = (e: any) => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="modal" id="modal">
                <h2>Modal Window</h2>
                <div className="content">{this.props.children}</div>
                <div className="actions">
                    <button className="toggle-button" onClick={this.onClose}>
                        close
                    </button>
                </div>
            </div>
        );
    }
}

export default Modal;
