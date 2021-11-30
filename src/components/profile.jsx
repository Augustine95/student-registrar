import React, { Component } from 'react';
import { toast } from 'react-toastify';
import auth from '../services/authService';
import Card from './card';

export default class profile extends Component {
	render() {
		const { schools } = this.props;

		return (
			<div>
				<h1>My Profile</h1>
				<div className="profile">
					<p className="stress">Hello {auth.getCurrentUser().name} !</p>
					<div className="cards">
						{schools.map((school) => <Card key={school._id} label={school.title} />)}
					</div>
				</div>
			</div>
		);
	}
}
