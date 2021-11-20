import React, { Component } from 'react';
import audio from '../audios/audio.mp3';

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<h1>Home Page</h1>
				<audio hidden download src={audio} controls autoPlay />
			</div>
		);
	}
}
