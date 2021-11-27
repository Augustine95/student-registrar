import React, { Component } from 'react';
import Star from './common/star';
import Table from './common/table';
import auth from '../services/authService';
export default class SchoolsTable extends Component {
	state = {};

	componentDidMount() {
		this.renderDeleteButton();
		this.setState({ user: auth.getCurrentUser() });
	}

	columns = [
		{ path: 'title', label: 'Title' },
		{ path: 'dailyRentalRate', label: 'Rate' },
		{
			key: 'like',
			content: (school) => <Star onClick={() => this.props.onStar(school)} starred={school.starred} />
		}
	];

	deleteButton = {
		key: 'delete',
		content: (school) => (
			<button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(school)}>
				Delete
			</button>
		)
	};

	renderDeleteButton = () => {
		const { user } = this.state;
		if (user && user.isAdmin) this.columns.push(this.deleteButton);
	};

	render() {
		const { schools, sortColumn, onSort } = this.props;
		return <Table columns={this.columns} data={schools} onSort={onSort} sortColumn={sortColumn} />;
	}
}
