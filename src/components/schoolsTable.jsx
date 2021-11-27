import React, { Component } from 'react';
import Star from './common/star';
import Table from './common/table';
export default class SchoolsTable extends Component {
	componentDidMount() {
		this.renderDeleteButton();
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
		const { user } = this.props;
		if (user && user.isAdmin) this.columns.push(this.deleteButton);
	};

	render() {
		const { schools, sortColumn, onSort } = this.props;
		return <Table columns={this.columns} data={schools} onSort={onSort} sortColumn={sortColumn} />;
	}
}
