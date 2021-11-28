import React from 'react';
import { NavLink } from 'react-router-dom';

class NavigationBar extends React.Component {
	render() {
		const { user } = this.props;

		return (
			<nav>
				<ul className="nav">
					<li>
						<NavLink className="nav-link nav-title" to="/">
							<i className="fa fa-graduation-cap" aria-hidden="true" /> Selection
						</NavLink>
					</li>
					<li>
						<NavLink className="nav-link" to="/home">
							<i className="fa fa-home" aria-hidden="true" /> Home
						</NavLink>
					</li>
					{user && (
						<React.Fragment>
							<li>
								<NavLink className="nav-link" to="/schools">
									<i className="fa fa-university" aria-hidden="true" /> Schools
								</NavLink>
							</li>
							<li>
								<NavLink className="nav-link" to="/profile">
									<i className="fa fa-user" aria-hidden="true" /> {user.name}
								</NavLink>
							</li>
							<li>
								<NavLink className="nav-link" to="/logout">
									<i className="fa fa-sign-out" aria-hidden="true" /> Logout
								</NavLink>
							</li>
						</React.Fragment>
					)}
					{!user && (
						<React.Fragment>
							<li>
								<NavLink className="nav-link" to="/login">
									<i className="fa fa-sign-in" aria-hidden="true" /> Login
								</NavLink>
							</li>
							<li>
								<NavLink className="nav-link" to="/register">
									<i class="fa fa-users" aria-hidden="true" /> Register
								</NavLink>
							</li>
						</React.Fragment>
					)}
				</ul>
			</nav>
		);
	}
}

export default NavigationBar;
