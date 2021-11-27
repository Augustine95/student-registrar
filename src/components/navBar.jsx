import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends React.Component {
	render() {
		const { user } = this.props;

		return (
			<div className="navbar-container">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<Link className="navbar-brand" to="/">
						<i className="fa fa-graduation-cap" aria-hidden="true" /> Selection
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<NavLink className="nav-item nav-link" to="/home">
								<i className="fa fa-home" aria-hidden="true" /> Home
							</NavLink>
							{user && (
								<React.Fragment>
									<NavLink className="nav-item nav-link" to="/schools">
										<i className="fa fa-university" aria-hidden="true" /> Schools
									</NavLink>
									<NavLink className="nav-item nav-link" to="/profile">
										<i className="fa fa-user" aria-hidden="true" /> {user.name}
									</NavLink>
									<NavLink className="nav-item nav-link" to="/logout">
										<i className="fa fa-sign-out" aria-hidden="true" /> Logout
									</NavLink>
								</React.Fragment>
							)}
							{!user && (
								<React.Fragment>
									<NavLink className="nav-item nav-link" to="/login">
										<i className="fa fa-sign-in" aria-hidden="true" /> Login
									</NavLink>
									<NavLink className="nav-item nav-link" to="/register">
										Register
									</NavLink>
								</React.Fragment>
							)}
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default NavBar;
