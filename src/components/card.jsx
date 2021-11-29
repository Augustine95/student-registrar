import React from 'react';

class Card extends React.Component {
	render() {
		const { label } = this.props;

		return (
			<div className="card">
				<img
					className="card-img-top"
					src="https://www.fsd79.org/cms/lib/IL02000973/Centricity/ModuleInstance/45/large/IMG_0836.jpg"
					alt="Card image cap"
				/>
				<div className="card-body">
					<p className="card-text">{label}</p>
					<input type="range" min="1" max="3" />
				</div>
			</div>
		);
	}
}

export default Card;
