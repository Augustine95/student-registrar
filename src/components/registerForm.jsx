import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getGenders } from '../services/fakeGenderService';
import auth from '../services/authService';
import * as userService from '../services/userService';

class RegisterForm extends Form {
	state = {
		data: { username: '', password: '', name: '', gender: '' },
		genders: [],
		errors: {}
	};

	componentDidMount() {
		this.setState({ genders: getGenders() });
	}

	schema = {
		username: Joi.string().required().label('Username'),
		password: Joi.string().required().min(5).label('Password'),
		name: Joi.string().required().label('Name'),
		gender: Joi.string().required().label('Gender')
	};

	doSubmit = async () => {
		try {
			const response = await userService.register(this.state.data);
			auth.loginWithJwt(response.headers['x-auth-token']);
			window.location = '/scores';
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				const errors = { ...this.state.errors };
				errors.indexNumber = ex.response.data;
				this.setState({ errors });
			}
		}
	};

	render() {
		return (
			<div>
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('username', 'Username')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderSelect('gender', 'Gender', this.state.genders)}
					{this.renderInput('name', 'Name')}
					{this.renderButton('Register')}
				</form>
			</div>
		);
	}
}

export default RegisterForm;
