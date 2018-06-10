import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import Textbox from '../../../TextBox/TextBox.jsx';
import StatusDropdown from './StatusDropdown.jsx';
import { utils } from '../../../../common';
import './AddContact.css';


export default class AddContact extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => {
        return {
            show: false,
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                status: null
            }
        };
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    updateFormValue(field, value) {
        this.setState({
            formData: {
                ...this.state.formData,
                [field]: value
            }
        });
    }

    handleOnCreate = () => {
        this.props.onAdd(this.state.formData);
        this.setState(this.getInitialState());
    }

    render() {
        const { show } = this.state;
        return (
            <div className='add-contact'>
                <Button bsStyle="primary" onClick={this.handleShow}>
                    Add Contact
                </Button>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Create New Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body bsClass='add-contact-popover'>
                        <div className='field first-name'>
                            <div className='label'>First Name</div>
                            <Textbox onBlur={(value) => this.updateFormValue('firstName', value)} />
                        </div>
                        <div className='field last-name'>
                            <div className='label'>Last Name</div>
                            <Textbox onBlur={(value) => this.updateFormValue('lastName', value)} />
                        </div>
                        <div className='field email'>
                            <div className='label'>Email</div>
                            <Textbox onBlur={(value) => this.updateFormValue('email', value)}
                                isValid={utils.isEmailValid} />
                        </div>
                        <div className='field phone-number'>
                            <div className='label'>Phone Number</div>
                            <Textbox onBlur={(value) => this.updateFormValue('phoneNumber', value)} />
                        </div>
                        <div className='field status'>
                            <div className='label'>Status</div>
                            <StatusDropdown onChange={(value) => this.updateFormValue('status', value)} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button bsStyle='primary' onClick={this.handleOnCreate}>Create</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}