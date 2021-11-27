import React from 'react';

const Star = ({ onClick, onDoubleClick, starred }) => {
	const getBadgeClass = () => {
		let badge = 'clickable fa fa-star';
		badge += starred ? '' : '-o';
		return badge;
	};

	return <i onClick={onClick} className={getBadgeClass()} />;
};
// full-star fa fa-star || half-star fa fa-star-half-o ||  empty-star fa fa-star-o
export default Star;
