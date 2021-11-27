import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Schools from './components/schools';
import HomePage from './components/homePage';
import InputScores from './components/inputScores';
import Profile from './components/profile';
import Logout from './components/logout';
import { getSchools } from './services/fakeSchoolsService';
import auth from './services/authService';
import './App.css';

class App extends Component {
	state = {
		user: '',
		schools: [],
		sortColumn: { path: 'title', order: 'asc' }
	};

	componentDidMount() {
		const user = auth.getCurrentUser();
		this.setState({ user, schools: getSchools() });
	}

	handleStarClick = (school) => {
		const schools = [ ...this.state.schools ];
		const index = schools.indexOf(school);
		schools[index] = { ...school };
		schools[index].starred = !schools[index].starred;
		this.setState({ schools });
	};

	handleDelete = (school) => {
		const schools = this.state.schools.filter((s) => s._id != school._id);
		this.setState({ schools });
	};

	handleSort = (sortColumn) => this.setState({ sortColumn });

	render() {
		const { schools, sortColumn, user } = this.state;

		return (
			<React.Fragment className="App">
				<NavBar user={user} />
				<main className="container">
					<Switch>
						<Route
							path="/profile"
							render={(props) => (
								<Profile
									schools={schools.filter((s) => s.starred)}
									onDelete={this.handleDelete}
									onSort={this.handleSort}
									onStarClick={this.handleStarClick}
									sortColumn={sortColumn}
									{...props}
								/>
							)}
						/>
						<Route path="/register" component={RegisterForm} />
						<Route path="/logout" component={Logout} />
						<Route path="/login" component={LoginForm} />
						<Route path="/home" component={HomePage} />
						<Route path="/students/:id" component={InputScores} />
						<Route
							path="/schools"
							render={(props) => (
								<Schools
									schools={schools}
									onDelete={this.handleDelete}
									onSort={this.handleSort}
									onStarClick={this.handleStarClick}
									sortColumn={sortColumn}
									user={user}
									{...props}
								/>
							)}
						/>
						<Route path="/not-found" component={NotFound} />
						<Redirect from="/" exact to="/home" />
						<Redirect to="/not-found" />
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
