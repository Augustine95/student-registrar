import React from 'react';

class RecommendationCard extends React.Component {
    render() {
        const { tweeterHandle, message, image } = this.props;

        return (
            <div className="twetter-recommendation">
                <article>
                    <img src={image} alt={`An image of ${tweeterHandle}`} />
                    <p className="tweet-handle">{`@${tweeterHandle}`}</p>
                    <p className="tweet-content">{message}</p>
                </article>
            </div>
        );
    }
}

export default RecommendationCard;