import React, { Component } from 'react';
import SchoolsTable from './schoolsTable';
import auth from '../services/authService';
import { toast } from 'react-toastify';

export default class profile extends Component {
	componentDidMount() {
		toast(`Hello ${auth.getCurrentUser()}!`);
	}

	render() {
		const { onDelete, onSort, sortColumn, schools, onStarClick } = this.props;

		return (
			<React.Fragment>
				<h1>My Profile</h1>
				<p className="stress">Hello! {auth.getCurrentUser().name}</p>
				<p>You have selected {schools.length} school(s) </p>
				{schools.length !== 0 && (
					<SchoolsTable
						onDelete={onDelete}
						onSort={onSort}
						sortColumn={sortColumn}
						schools={schools}
						onStar={onStarClick}
					/>
				)}
			</React.Fragment>
		);
	}
}
