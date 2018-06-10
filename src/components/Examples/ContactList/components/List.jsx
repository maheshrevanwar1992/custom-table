import React from 'react';
import CustomTable from '../../../CustomTable/index.js';
import TextBox from '../../../TextBox/TextBox.jsx';
import StatusDropdown from './StatusDropdown.jsx';


export default class List extends React.PureComponent {



    render() {
        const { contactListData, updateValue, onDelete } = this.props;
        return (
            <CustomTable>
                <CustomTable.TableHeader>
                    <CustomTable.HeaderCell>First Name</CustomTable.HeaderCell>
                    <CustomTable.HeaderCell>Last Name</CustomTable.HeaderCell>
                    <CustomTable.HeaderCell>Email</CustomTable.HeaderCell>
                    <CustomTable.HeaderCell>Phone Number</CustomTable.HeaderCell>
                    <CustomTable.HeaderCell>Status</CustomTable.HeaderCell>
                    <CustomTable.HeaderCell></CustomTable.HeaderCell>
                </CustomTable.TableHeader>
                {
                    contactListData.length > 0 &&
                    contactListData.map((contact) => (
                        <CustomTable.Row key={contact.id}>
                            <CustomTable.Cell>
                                <TextBox value={contact.firstName}
                                    onBlur={(value) => updateValue('firstName', contact.id, value)} />
                            </CustomTable.Cell>
                            <CustomTable.Cell>
                                <TextBox value={contact.lastName}
                                    onBlur={(value) => updateValue('lastName', contact.id, value)} />
                            </CustomTable.Cell>
                            <CustomTable.Cell>
                                <TextBox value={contact.email}
                                    onBlur={(value) => updateValue('email', contact.id, value)} />
                            </CustomTable.Cell>
                            <CustomTable.Cell>
                                <TextBox value={contact.phoneNumber}
                                    onBlur={(value) => updateValue('phoneNumber', contact.id, value)} />
                            </CustomTable.Cell>
                            <CustomTable.Cell>
                                <StatusDropdown value={contact.status}
                                    onChange={(value) => updateValue('status', contact.id, value)} />
                            </CustomTable.Cell>
                            <CustomTable.Cell>
                                <div className='link'
                                    onClick={() => onDelete(contact.id)} >Delete</div>
                            </CustomTable.Cell>
                        </CustomTable.Row>
                    ))
                }
                {
                    contactListData.length === 0 &&
                    (<div className='no-results-found row'>No Contacts found</div>)
                }
            </CustomTable>
        );
    }
}