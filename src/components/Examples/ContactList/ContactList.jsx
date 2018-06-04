import React from 'react';
import CustomTable from '../../CustomTable/index.js';
import ContactListData from '../../../data/ContactList.json';


export default class ContactList extends React.PureComponent {

    render() {
        return (
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
                            <CustomTable.Cell>{contact.firstName}</CustomTable.Cell>
                            <CustomTable.Cell>{contact.lastName}</CustomTable.Cell>
                            <CustomTable.Cell>{contact.email}</CustomTable.Cell>
                            <CustomTable.Cell>{contact.phoneNumber}</CustomTable.Cell>
                            <CustomTable.Cell>{contact.status}</CustomTable.Cell>
                        </CustomTable.Row>
                    ))
                }
            </CustomTable>
        );
    }
}