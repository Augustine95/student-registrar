import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ user }) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to="/">
				Registrar <i class="fa fa-graduation-cap" aria-hidden="true" />
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
						Home <i class="fa fa-home" aria-hidden="true" />
					</NavLink>
					{user && (
						<React.Fragment>
							<NavLink className="nav-item nav-link" to="/students/:id">
								Scores <i class="fa fa-id-card" aria-hidden="true" />
							</NavLink>
							<NavLink className="nav-item nav-link" to="/schools">
								Schools <i class="fa fa-university" aria-hidden="true" />
							</NavLink>
							<NavLink className="nav-item nav-link" to="/profile">
								<i class="fa fa-user" aria-hidden="true" /> {user.name}
							</NavLink>
						</React.Fragment>
					)}
					{!user && (
						<React.Fragment>
							<NavLink className="nav-item nav-link" to="/login">
								Login <i class="fa fa-toggle-on" aria-hidden="true" />
							</NavLink>
							<NavLink className="nav-item nav-link" to="/register">
								Register <i class="fa fa-users" aria-hidden="true" />
							</NavLink>
						</React.Fragment>
					)}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
