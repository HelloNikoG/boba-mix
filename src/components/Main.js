import React from 'react';
import OrderCard from './OrderCard';
import ImageCard from './ImageCard';
import { Container, Row, Col } from 'reactstrap';

function Main() {
	return (
		<Container fluid className="mt-3">
			<Row>
				<Col>
					<ImageCard />
				</Col>
			</Row>
			<Row>
				<OrderCard />
			</Row>
			<div className="col-md-2">hello</div>
		</Container>
	);
}

export default Main;
