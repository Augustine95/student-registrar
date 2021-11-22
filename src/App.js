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
import './App.css';

class App extends Component {
	state = {};

	componentDidMount() {
		this.setState({ user: auth.getCurrentUser() });
	}

	render() {
		return (
			<React.Fragment>
				<NavBar user={this.state.user} />
				<main className="container">
					<Switch>
						<Route path="/profile" component={Profile} />
						<Route path="/register" component={RegisterForm} />
						<Route path="/login" component={LoginForm} />
						<Route path="/home" component={HomePage} />
						<Route path="/students/:id" component={InputScores} />
						<Route path="/schools" component={Schools} />
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
