import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

function ImageCard() {
	const textColor = { color: 'white' };
	const align = {
		textAlign: 'left',
	};

	return (
		<Card>
			<CardImg src="/assets/teamix.jpg"></CardImg>
			<CardImgOverlay>
				<CardTitle style={textColor}>
					<h2 style={align}>Start Your Order</h2>
				</CardTitle>
			</CardImgOverlay>
		</Card>
	);
}

export default ImageCard;
