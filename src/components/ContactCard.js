import React from 'react';
import {
	Row,
	Button,
	Col,
	Card,
	CardImg,
	CardText,
	Container,
	CardBody,
	CardTitle,
	Input,
	InputGroup,
	InputGroupText,
} from 'reactstrap';
// import { BsInstagram } from 'react-icons/bs';

function ContactCard() {
	const handleSubmit = (e) => {
		alert(`Submitted!\nThanks for your input`);
		e.preventDefault();
	};
	return (
		<Container fluid>
			<Row className="mt-3">
				<Col md="6">
					<Card className="border-0 ">
						<CardImg className="img-fluid" src="/assets/teapeople.jpg" />
					</Card>
				</Col>

				<Col md="6">
					<Card>
						<CardBody>
							<CardTitle>
								<h3>Get in touch </h3>
							</CardTitle>
							<CardText>
								<InputGroup>
									<InputGroupText>Name</InputGroupText>
									<Input />
								</InputGroup>
							</CardText>
							<Button onClick={handleSubmit}>Submit</Button>
						</CardBody>
						<Row>
							<Col>{/* <BsInstagram /> */}</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default ContactCard;
