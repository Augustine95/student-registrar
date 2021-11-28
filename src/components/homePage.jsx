import React, { Component } from 'react';
import me1 from './images/me1.png';
import image1 from './images/image1.jpeg';

export default class HomePage extends Component {
	render() {
		return (
			<div className="login">
				<h1 className="heading">Student School Allocation</h1>
				<h2>Introduction</h2>
				<p>
					We are here to help you to get school of your dream. We'll give you a notification of the school you
					have been chosen basing on what you selected.
				</p>
				<p>
					The process is completely free. <a href="/login">Login</a> or <a href="/register">Register</a> with
					us to get started.{' '}
				</p>
				<h2>What others have to say.</h2>
				<section className="recommendations">
					<article>
						<img src={me1} alt="An image of Augustine" />
						<p className="tweet-handle">@awuoriaugustine</p>
						<p className="tweet-content">
							Student Selection Allocation application has helped me connect to the school of my dream
						</p>
					</article>
					<article>
						<img src={image1} alt="An image of tweeter lover" />
						<p className="tweet-handle">@tweeterlover</p>
						<p className="tweet-content">I've never met any better site that allocates better schools.</p>
					</article>
				</section>
				<h2>Help Centre</h2>
				<section className="help-steps">
					<h3>Steps</h3>
					<ol>
						<li>Login or Register. You'll be directed to a page to input your subject scores</li>
						<li>Fill in your scores for the mentioned subjects. Then submit the results.</li>
						<li>On the Schools tab, choose at most three schools with interest level from 1 to 3.</li>
					</ol>
				</section>
			</div>
		);
	}
}
