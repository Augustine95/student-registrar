import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class LoginForm extends Form {
	state = {
		data: { indexNumber: '', password: '' },
		errors: {}
	};

	schema = {
		indexNumber: Joi.string().required().label('Index'),
		password: Joi.string().required().label('Password')
	};

	doSubmit = () => {
		// Call the server
		console.log('Submitted');
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('indexNumber', 'Index')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderButton('Login')}
				</form>
			</div>
		);
	}
}

export default LoginForm;
