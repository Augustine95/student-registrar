import React, { Component } from 'react';
import Like from './common/like';
import Star from './common/star';
import Table from './common/table';

export default class SchoolsTable extends Component {
	columns = [
		{ path: 'title', label: 'Title' },
		{ path: 'dailyRentalRate', label: 'Rate' },
		{
			key: 'like',
			content: (school) => <Star onClick={() => this.props.onStar(school)} starred={school.starred} />
		},
		{
			key: 'delete',
			content: (school) => (
				<button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(school)}>
					Delete
				</button>
			)
		}
	];

	render() {
		const { schools, sortColumn, onSort } = this.props;
		return <Table columns={this.columns} data={schools} onSort={onSort} sortColumn={sortColumn} />;
	}
}
