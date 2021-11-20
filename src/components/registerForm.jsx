import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getGenders } from '../services/fakeGenderService';

class RegisterForm extends Form {
	state = {
		data: { indexNumber: '', password: '', name: '', gender: '' },
		genders: [],
		errors: {}
	};

	componentDidMount() {
		this.setState({ genders: getGenders() });
	}

	schema = {
		indexNumber: Joi.string().required().label('Index'),
		password: Joi.string().required().min(5).label('Password'),
		name: Joi.string().required().label('Name'),
		gender: Joi.string().required().label('Gender')
	};

	doSubmit = () => {
		// Call the server
		console.log('Submitted');
	};

	render() {
		return (
			<div>
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('indexNumber', 'Index')}
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
