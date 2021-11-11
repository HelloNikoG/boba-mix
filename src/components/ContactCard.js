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
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

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
					<Card className="pb-3">
						<CardBody>
							<CardTitle>
								<h3>Get in touch </h3>
							</CardTitle>
							<CardText>
								<p>Let us know how were doing...</p>
								<InputGroup>
									<InputGroupText>Name</InputGroupText>
									<Input type="text" />
								</InputGroup>
								<br />
								<InputGroup>
									<InputGroupText>Comment</InputGroupText>
									<Input type="textarea" />
								</InputGroup>
							</CardText>
							<Button block color="danger" onClick={handleSubmit}>
								Submit
							</Button>
						</CardBody>
						<Row className="mx-5">
							<Col>
								<BsInstagram size={50} />
							</Col>
							<Col>
								<BsTwitter size={50} />
							</Col>
							<Col>
								<BsFacebook size={50} />
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default ContactCard;
