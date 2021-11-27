import React, { Component } from 'react';
import SchoolsTable from './schoolsTable';

export default class profile extends Component {
	render() {
		const { onDelete, onSort, sortColumn, schools, onStarClick } = this.props;

		return (
			<React.Fragment>
				<h1>My Profile</h1>
				<p>Name: </p>
				<SchoolsTable
					onDelete={onDelete}
					onSort={onSort}
					sortColumn={sortColumn}
					schools={schools}
					onStar={onStarClick}
				/>
			</React.Fragment>
		);
	}
}
