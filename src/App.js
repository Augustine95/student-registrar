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
import auth from './services/authService';
import { getSchools } from './services/fakeSchoolsService';
import './App.css';

class App extends Component {
	state = {
		user: '',
		schools: [],
		sortColumn: { path: 'title', order: 'asc' }
	};

	componentDidMount() {
		const schools = [ ...getSchools() ];
		this.setState({ user: auth.getCurrentUser(), schools });
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
		return (
			<React.Fragment className="App">
				<NavBar user={this.state.user} />
				<main className="container">
					<Switch>
						<Route
							path="/profile"
							render={(props) => (
								<Profile
									schools={this.state.schools.filter((s) => s.starred)}
									onDelete={this.handleDelete}
									onSort={this.handleSort}
									onStarClick={this.handleStarClick}
									sortColumn={this.state.sortColumn}
									{...props}
								/>
							)}
						/>
						<Route path="/register" component={RegisterForm} />
						<Route path="/login" component={LoginForm} />
						<Route path="/home" component={HomePage} />
						<Route path="/students/:id" component={InputScores} />
						<Route
							path="/schools"
							render={(props) => (
								<Schools
									schools={this.state.schools}
									onDelete={this.handleDelete}
									onSort={this.handleSort}
									onStarClick={this.handleStarClick}
									sortColumn={this.state.sortColumn}
									user={this.state.user}
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
