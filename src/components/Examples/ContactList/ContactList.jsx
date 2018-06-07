import React from 'react';
import CustomTable from '../../CustomTable/index.js';
import ContactListData from '../../../data/ContactList.json';
import TextBox from '../../TextBox/TextBox.jsx';
import { _ } from '../../../common/index.js';
import './ContactList.css';


export default class ContactList extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            ContactListData: _.cloneDeep(ContactListData)
        }
    }

    handleFirstNameChange(id, value) {
        this.setState((prevState) => ({
            ContactListData: this.state.ContactListData.map(contact => {
                if (contact.id === id) {
                    return {
                        ...contact,
                        firstName: value
                    };
                }
                return contact;
            })
        }));
    }

    render() {
        const { ContactListData } = this.state;
        return (
            <div className='contact-list'>
                <CustomTable>
                    <CustomTable.TableHeader>
                        <CustomTable.HeaderCell>First Name</CustomTable.HeaderCell>
                        <CustomTable.HeaderCell>Last Name</CustomTable.HeaderCell>
                        <CustomTable.HeaderCell>Email</CustomTable.HeaderCell>
                        <CustomTable.HeaderCell>Phone Number</CustomTable.HeaderCell>
                        <CustomTable.HeaderCell>Status</CustomTable.HeaderCell>
                    </CustomTable.TableHeader>
                    {
                        ContactListData.map((contact) => (
                            <CustomTable.Row key={contact.id}>
                                <CustomTable.Cell>
                                    <TextBox value={contact.firstName}
                                        onChange={(value) => this.handleFirstNameChange(contact.id, value)} />
                                </CustomTable.Cell>
                                <CustomTable.Cell><TextBox value={contact.lastName} /></CustomTable.Cell>
                                <CustomTable.Cell><TextBox value={contact.email} /></CustomTable.Cell>
                                <CustomTable.Cell>{contact.phoneNumber}</CustomTable.Cell>
                                <CustomTable.Cell>{contact.status}</CustomTable.Cell>
                            </CustomTable.Row>
                        ))
                    }
                </CustomTable>
            </div>
        );
    }
}