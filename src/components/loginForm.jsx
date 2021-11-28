import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import auth from '../services/authService';

class LoginForm extends Form {
	state = {
		data: { indexNumber: '', password: '' },
		errors: {}
	};

	schema = {
		indexNumber: Joi.string().required().label('Index'),
		password: Joi.string().required().label('Password')
	};

	doSubmit = async () => {
		try {
			const { data } = this.state;

			await auth.login(data.indexNumber, data.password);
			window.location = '/';
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
				<h1>Login</h1>
				<form
					// className="w-50"
					onSubmit={this.handleSubmit}
				>
					{this.renderInput('indexNumber', 'Index')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderButton('Login')}
				</form>
			</div>
		);
	}
}

export default LoginForm;
