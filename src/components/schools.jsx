import React, { Component } from 'react';
import SchoolsTable from './schoolsTable';
import Pagination from './common/pagination';
import { getSchools } from '../services/fakeSchoolsService';
import { paginate } from '../utils/paginate';
import SearchBox from './searchBox';
import _ from 'lodash';

class Schools extends Component {
	state = {
		schools: [],
		sortColumn: { path: 'title', order: 'asc' },
		pageSize: 3,
		currentPage: 1,
		querySearch: ''
	};

	componentDidMount() {
		this.setState({ schools: getSchools() });
	}

	handlePageChange = (page) => this.setState({ currentPage: page });

	handleDelete = (school) => {
		const schools = this.state.schools.filter((s) => s._id != school._id);
		this.setState({ schools });
	};

	handleLike = (school) => {
		const schools = [ ...this.state.schools ];
		const index = schools.indexOf(school);
		schools[index] = { ...school };
		schools[index].liked = !schools[index].liked;
		this.setState({ schools });
	};

	handleSort = (sortColumn) => this.setState({ sortColumn });

	handleSearch = (query) => this.setState({ querySearch: query });

	getPagedData() {
		const { currentPage, pageSize, schools: allSchools, sortColumn, querySearch } = this.state;

		const sorted = _.orderBy(allSchools, [ sortColumn.path ], [ sortColumn.order ]);
		const filtered = sorted.filter((s) => s.title.toLowerCase().startsWith(querySearch.toLowerCase()));
		const schools = paginate(filtered, currentPage, pageSize);
		return { filtered, schools };
	}

	render() {
		const { currentPage, pageSize, sortColumn, querySearch } = this.state;

		const { filtered, schools } = this.getPagedData();

		if (filtered.length == 0) return <p>There are no movies in the database.</p>;
		return (
			<div>
				<h1>Offered Schools</h1>
				<p>Showing {filtered.length} schools in the database.</p>
				<SearchBox onChange={this.handleSearch} value={querySearch} />
				<SchoolsTable
					onLike={this.handleLike}
					onDelete={this.handleDelete}
					onSort={this.handleSort}
					sortColumn={sortColumn}
					schools={schools}
				/>
				<Pagination
					currentPage={currentPage}
					itemsCount={filtered.length}
					onPageChange={this.handlePageChange}
					pageSize={pageSize}
				/>
			</div>
		);
	}
}

export default Schools;
