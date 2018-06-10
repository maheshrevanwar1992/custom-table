import React from 'react';
import ContactListData from '../../../data/ContactList.json';
import { _, utils } from '../../../common/index.js';
import List from './components/List.jsx';
import AddContact from './components/AddContact.jsx';
import './ContactList.css';


export default class ContactList extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			contactListData: _.cloneDeep(ContactListData)
		}
	}

	updateValue = (fieldName, id, value) => {
		this.setState((prevState) => ({
			contactListData: prevState.contactListData.map(contact => {
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

	handleOnAddContact = (contact) => {
		this.setState({
			contactListData: [
				{
					...contact,
					id: utils.guid()
				},
				...this.state.contactListData
			]
		});
	}

	handleOnDelete = (id) => {
		this.setState((prevState) => ({
			contactListData: prevState.contactListData.filter(contact => (contact.id !== id))
		}));
	}

	render() {
		const { contactListData } = this.state;
		return (
			<div className='app-wrapper'>
				<div className='contact-list'>
					<AddContact onAdd={this.handleOnAddContact} />
					<List contactListData={contactListData} updateValue={this.updateValue}
						onDelete={this.handleOnDelete} />
				</div>
			</div>
		);
	}
}