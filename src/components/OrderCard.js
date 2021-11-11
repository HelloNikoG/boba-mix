import React, { Component } from 'react';
import {
	Alert,
	Button,
	Form,
	Label,
	Input,
	Col,
	Row,
	Card,
	FormText,
	CardImg,
	CardText,
	CardBody,
	CardImgOverlay,
	CardTitle,
} from 'reactstrap';

class OrderCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			size: ' ',
			sugarLevel: ' ',
			temp: ' ',
			teaBase: ' ',
			name: '',
			phoneNum: '',
			alert: false,
			toppings: {
				boba: false,
				teaJelly: false,
				pudding: false,
				redBean: false,
				freshFruit: false,
				lycheeJelly: false,
			},
		};
	}

	handleSelection = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			alert: true,
		});
	};

	handleSubmit = (e) => {
		alert(
			`Thanks ${this.state.name}! \n We will text you when your order is ready!`
		);
		e.preventDefault();
	};

	handleToppings = (e) => {
		this.setState({ alert: true });
		let { value, checked } = e.target;
		this.setState((e) => {
			let selected = e.toppings;
			return (selected[value] = checked);
		});
	};

	render() {
		const displayToppings = Object.keys(this.state.toppings).filter(
			(x) => this.state.toppings[x]
		);
		return (
			<>
				<Alert
					color="danger"
					isOpen={this.state.alert}
					className="shadow sticky-top "
				>
					<Row className="align-items-center">
						<Col md="12">
							<h2>Building your order:</h2>
							<hr />
						</Col>
					</Row>
					<Row>
						<Col>
							Temp:{' '}
							<p>
								<strong>{this.state.temp}</strong>
							</p>
						</Col>
						<Col>
							Size:
							<p>
								<strong>{this.state.size}</strong>
							</p>
						</Col>
					</Row>
					<Row>
						<Col>
							Sugar:{' '}
							<p>
								<strong>{this.state.sugarLevel}</strong>
							</p>
						</Col>

						<Col>
							Tea base:
							<p>
								<strong>{this.state.teaBase}</strong>
							</p>
						</Col>
					</Row>
					<Row>
						<Col>
							Toppings:
							<p>
								<strong>{`${displayToppings}`}</strong>
							</p>
						</Col>
					</Row>
				</Alert>
				<Row>
					<Col>
						<Card className="shadow mt-3">
							<Row>
								<Col className="m-3">
									<h2>Order details</h2>
								</Col>
							</Row>
							<Row className="mx-1">
								<Col xs="12">
									<Card className="border-0">
										<CardBody>
											<FormText color="muted">
												Input your name and number and we will text you when
												your order is ready!
											</FormText>
										</CardBody>
									</Card>
								</Col>
							</Row>
							<Row>
								<Col className="m-0">
									<Card className="border-0 order-details">
										<CardBody>
											<Label htmlFor="customer name">
												<Input
													// className="mx-1 my-1"
													type="text"
													id="customer name"
													name="name"
													value={this.state.name}
													placeholder="name"
													onChange={this.handleSelection}
												/>
											</Label>
										</CardBody>
									</Card>
								</Col>
								<Col className="m-0">
									<Card className="border-0 order-details">
										<CardBody>
											<Label htmlFor="phone number">
												<Input
													type="tel"
													id="phone number"
													name="phoneNum"
													value={this.state.phoneNum}
													placeholder="phone num"
													onChange={this.handleSelection}
												/>
											</Label>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>

				<Row>
					<Col>
						<Card className="shadow mt-3">
							<Row>
								<Col className="m-3">
									<h2>Size & Temperature</h2>
								</Col>
							</Row>

							<Row className="mx-1">
								<Col>
									<Card className="border-0">
										<CardBody>
											<Button
												block
												className="border-danger shadow-sm"
												onClick={this.handleSelection}
												name="temp"
												value="Hot"
												active={this.state.size === 'Hot' ? true : false}
												color={
													this.state.temp === 'Hot' ? 'danger' : 'transparent'
												}
											>
												Hot
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col className="mx-1">
									<Card className="border-0">
										<CardBody>
											<Button
												block
												className="border-primary shadow-sm "
												onClick={this.handleSelection}
												name="temp"
												value="Iced"
												active={this.state.size === 'Iced' ? true : false}
												color={
													this.state.temp === 'Iced' ? 'primary' : 'transparent'
												}
											>
												Iced
											</Button>
										</CardBody>
									</Card>
								</Col>
							</Row>
							<Row className="mt-2 mb-3 mx-1">
								<Col lg="4">
									<Card className="border-0">
										<CardBody className="p-2">
											<Button
												block
												className="p-2  border-dark shadow-sm"
												onClick={this.handleSelection}
												name="size"
												value="Small"
												active={this.state.size === 'Small'}
												color={
													this.state.size === 'Small'
														? 'secondary'
														: 'transparent'
												}
											>
												Small (8oz)
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col lg="4">
									<Card className="border-0">
										<CardBody className="p-2">
											<Button
												block
												className="p-2 border-dark shadow-sm"
												onClick={this.handleSelection}
												name="size"
												value="Medium"
												active={this.state.size === 'Medium'}
												color={
													this.state.size === 'Medium'
														? 'secondary'
														: 'transparent'
												}
											>
												Medium (12oz)
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col lg="4">
									<Card className="border-0">
										<CardBody className="p-2">
											<Button
												block
												className="p-2  border-dark shadow-sm"
												onClick={this.handleSelection}
												name="size"
												value="Large"
												active={this.state.size === 'Large'}
												color={
													this.state.size === 'Large'
														? 'secondary'
														: 'transparent'
												}
											>
												Large (16oz)
											</Button>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
				<Row className="mt-3">
					<Col>
						<Card className="shadow">
							<CardImg src="assets/percent.jpg" />
							<CardImgOverlay>
								<Row>
									<Col>
										<h2>Sugar Level</h2>
									</Col>
								</Row>
							</CardImgOverlay>

							<Row className="mt-3">
								<Col lg="4">
									<Card className="border-0">
										<CardBody className="p-2">
											<Button
												block
												className="border-dark shadow-sm"
												onClick={this.handleSelection}
												name="sugarLevel"
												value="25%"
												active={this.state.sugarLevel === '25%' ? true : false}
												color={
													this.state.sugarLevel === '25%'
														? 'secondary'
														: 'transparent'
												}
											>
												25%
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col lg="4">
									<Card className="border-0">
										<CardBody className="p-2">
											<Button
												block
												className="border-dark shadow-sm"
												onClick={this.handleSelection}
												name="sugarLevel"
												value="50%"
												active={this.state.sugarLevel === '50%'}
												color={
													this.state.sugarLevel === '50%'
														? 'secondary'
														: 'transparent'
												}
											>
												50%
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col lg="4">
									<Card className="border-0">
										<CardBody className="p-2">
											<Button
												block
												className="border-dark shadow-sm"
												onClick={this.handleSelection}
												name="sugarLevel"
												value="75%"
												active={this.state.sugarLevel === '75%'}
												color={
													this.state.sugarLevel === '75%'
														? 'secondary'
														: 'transparent'
												}
											>
												75%
											</Button>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Card>
					</Col>

					<Col>
						<Card className="shadow">
							<CardImg src="assets/bottles.jpg" />
							<CardImgOverlay>
								<Row>
									<Col>
										<h2>Tea base</h2>
									</Col>
								</Row>
							</CardImgOverlay>
							<Row className="mt-3">
								<Col lg="3">
									<Card className="border-0">
										<CardBody className="p-2">
											<Button
												block
												className="border-dark"
												onClick={this.handleSelection}
												name="teaBase"
												value="milk tea"
												active={this.state.teaBase === 'milk tea'}
												color={
													this.state.teaBase === 'milk tea'
														? 'secondary'
														: 'transparent'
												}
											>
												Milk Tea
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col lg="3">
									<Card className="border-0">
										<CardBody className="p-2">
											<Button
												block
												className="border-dark"
												onClick={this.handleSelection}
												name="teaBase"
												value="black"
												active={this.state.teaBase === 'black'}
												color={
													this.state.teaBase === 'black'
														? 'secondary'
														: 'transparent'
												}
											>
												Black Tea
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col lg="3">
									<Card className="border-0">
										<CardBody className="p-2">
											<Button
												block
												className="border-dark "
												onClick={this.handleSelection}
												name="teaBase"
												value="green"
												active={this.state.teaBase === 'green'}
												color={
													this.state.teaBase === 'green'
														? 'secondary'
														: 'transparent'
												}
											>
												Green Tea
											</Button>
										</CardBody>
									</Card>
								</Col>
								<Col lg="3">
									<Card className="border-0">
										<CardBody className="p-2">
											<Button
												block
												className="border-dark px-1"
												onClick={this.handleSelection}
												name="teaBase"
												value="oolong"
												active={this.state.teaBase === 'oolong'}
												color={
													this.state.teaBase === 'oolong'
														? 'secondary'
														: 'transparent'
												}
											>
												Oolong Tea
											</Button>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
				<Row className="mt-3">
					<Col>
						<Card className="shadow">
							<CardImg src="assets/bobaCup.jpg" />
							<CardImgOverlay>
								<Row>
									<Col>
										<h2>Toppings</h2>
									</Col>
								</Row>
							</CardImgOverlay>

							<Row className="mt-3">
								<Col md="4">
									<Card className="shadow mx-2 boxx test">
										<CardBody>
											Boba Pearls
											<Input
												className="checkbox"
												type="checkbox"
												id="boba"
												value=" Boba Pearls "
												onChange={this.handleToppings}
											/>
										</CardBody>
									</Card>
								</Col>
								<Col md="4">
									<Card className="shadow mx-2 boxx test">
										<CardBody>
											Adzuki Bean
											<Input
												className="checkbox"
												type="checkbox"
												value=" Adzuki Bean "
												onChange={this.handleToppings}
											/>
										</CardBody>
									</Card>
								</Col>
								<Col md="4">
									<Card className="shadow mx-2 boxx test">
										<CardBody>
											Tea Jelly
											<Input
												className="checkbox"
												type="checkbox"
												value=" Tea Jelly "
												onChange={this.handleToppings}
											></Input>
										</CardBody>
									</Card>
								</Col>
							</Row>

							<Row className="mt-2 mb-3">
								<Col md="4">
									<Card className="shadow mx-2 boxx test">
										<CardBody>
											Egg Pudding
											<Input
												className="checkbox"
												type="checkbox"
												value=" Egg Pudding "
												onChange={this.handleToppings}
											></Input>
										</CardBody>
									</Card>
								</Col>
								<Col md="4">
									<Card className="shadow mx-2 boxx test">
										<CardBody>
											Mixed Fruit
											<Input
												className="checkbox"
												type="checkbox"
												value=" Mixed Fruit "
												onChange={this.handleToppings}
											></Input>
										</CardBody>
									</Card>
								</Col>
								<Col md="4">
									<Card className="shadow mx-2 boxx test">
										<CardBody>
											Lychee Jelly
											<Input
												className="checkbox"
												type="checkbox"
												value=" Lychee Jelly "
												onChange={this.handleToppings}
											></Input>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>

				<Row className="mt-3 mb-3">
					<Col>
						<Button block color="danger" onClick={this.handleSubmit}>
							SUBMIT
						</Button>
					</Col>
				</Row>
			</>
		);
	}
}

export default OrderCard;
