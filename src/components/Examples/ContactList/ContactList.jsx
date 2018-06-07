import React from 'react';
import CustomTable from '../../CustomTable/index.js';
import ContactListData from '../../../data/ContactList.json';
import TextBox from '../../TextBox/TextBox.jsx';
import Dropdown from '../../Dropdown/Dropdown.jsx';
import { _ } from '../../../common/index.js';
import { STATUS } from './ConstactList.constants.js';
import './ContactList.css';


export default class ContactList extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			ContactListData: _.cloneDeep(ContactListData)
		}
	}

	updateValue = (fieldName, id, value) => {
		this.setState((prevState) => ({
			ContactListData: this.state.ContactListData.map(contact => {
				if (contact.id === id) {
					return {
						...contact,
						[fieldName]: value
					};
				}
				return contact;
			})
		}));
	}

	getStatus = () => {
		return Object.keys(STATUS).map((key) => ({
			id: STATUS[key],
			label: STATUS[key]
		}))
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
										onChange={(value) => this.updateValue('firstName', contact.id, value)} />
								</CustomTable.Cell>
								<CustomTable.Cell>
									<TextBox value={contact.lastName}
										onChange={(value) => this.updateValue('lastName', contact.id, value)} />
								</CustomTable.Cell>
								<CustomTable.Cell>
									<TextBox value={contact.email}
										onChange={(value) => this.updateValue('email', contact.id, value)} />
								</CustomTable.Cell>
								<CustomTable.Cell>
									<TextBox value={contact.phoneNumber}
										onChange={(value) => this.updateValue('phoneNumber', contact.id, value)} />
								</CustomTable.Cell>
								<CustomTable.Cell>
									<Dropdown value={contact.value} values={this.getStatus()}
										onChange={(value) => this.updateValue('status', contact.id, value)} />
								</CustomTable.Cell>
							</CustomTable.Row>
						))
					}
				</CustomTable>
			</div>
		);
	}
}