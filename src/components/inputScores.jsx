import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

export default class InputScores extends Form {
	state = {
		data: { english: '', sst: '', math: '', science: '' },
		errors: {}
	};

	schema = {
		english: Joi.number().min(0).max(100).required().label('English'),
		sst: Joi.number().min(0).max(100).required().label('Social Studies'),
		math: Joi.number().min(0).max(100).required().label('Math'),
		science: Joi.number().min(0).max(100).required().label('Science')
	};

	doSubmit() {
		console.log('Submission Recieved');
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				<h1>Input Scores</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('sst', 'Social Studies')}
					{this.renderInput('english', 'English')}
					{this.renderInput('math', 'Math')}
					{this.renderInput('science', 'Science')}
					{this.renderButton('Submit Scores')}
				</form>
			</div>
		);
	}
}
