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
			<Col className="mt-3">
				<Alert color="info" isOpen={this.state.alert} className="sticky-top ">
					<Row className="align-items-center">
						<Col md="12">
							<h4>Building your order:</h4>
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

				<Form onSubmit={this.handleSubmit}>
					<Card>
						<FormText color="muted">
							Input your name and number and we will text you when your order is
							ready!
						</FormText>

						<Row>
							<Col>
								<Label htmlFor="customer name">
									<Input
										type="text"
										id="customer name"
										name="name"
										value={this.state.name}
										placeholder="name"
										onChange={this.handleSelection}
									/>
								</Label>
							</Col>
							<Col>
								<Label htmlFor="phone number">
									<Input
										type="tel"
										id="phone number"
										name="phoneNum"
										value={this.state.phoneNum}
										placeholder="phone number"
										onChange={this.handleSelection}
									/>
								</Label>
							</Col>
						</Row>
					</Card>

					<Row>
						<Col>
							<Card className="mt-3">
								<Row>
									<Col className="m-3">
										<h4>Size & Temperature</h4>
									</Col>
								</Row>

								<Row>
									<Col>
										<Card className="border-0">
											<CardBody>
												<Button
													block
													className="border-danger btn-block "
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
									<Col>
										<Card className="border-0">
											<CardBody>
												<Button
													className="border-primary btn-block"
													onClick={this.handleSelection}
													name="temp"
													value="Iced"
													active={this.state.size === 'Iced' ? true : false}
													color={
														this.state.temp === 'Iced'
															? 'primary'
															: 'transparent'
													}
												>
													Iced
												</Button>
											</CardBody>
										</Card>
									</Col>
								</Row>
								<Row className="mt-3">
									<Col lg="4">
										<Card>
											<CardBody className="p-1">
												<Button
													className="p-2 btn-block border-dark"
													onClick={this.handleSelection}
													name="size"
													value="Small"
													active={this.state.size === 'Small'}
													color={
														this.state.size === 'Small' ? 'info' : 'transparent'
													}
												>
													Small (8oz)
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col lg="4">
										<Card>
											<CardBody className="p-1">
												<Button
													className="p-2 btn-block border-dark"
													onClick={this.handleSelection}
													name="size"
													value="Medium"
													active={this.state.size === 'Medium'}
													color={
														this.state.size === 'Medium'
															? 'info'
															: 'transparent'
													}
												>
													Medium (12oz)
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col lg="4">
										<Card>
											<CardBody className="p-1">
												<Button
													className="p-2 btn-block border-dark"
													onClick={this.handleSelection}
													name="size"
													value="Large"
													active={this.state.size === 'Large'}
													color={
														this.state.size === 'Large' ? 'info' : 'transparent'
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
						<Col md="6">
							<Card>
								<CardImg src="assets/percent.jpg" />
								<CardImgOverlay>
									<Row>
										<Col>
											<h4>Sweetness</h4>
										</Col>
									</Row>
								</CardImgOverlay>

								<Row className="mt-3">
									<Col lg="4">
										<Card>
											<CardBody>
												<Button
													className="border-dark btn-block "
													onClick={this.handleSelection}
													name="sugarLevel"
													value="25%"
													active={
														this.state.sugarLevel === '25%' ? true : false
													}
													color={
														this.state.sugarLevel === '25%'
															? 'info'
															: 'transparent'
													}
												>
													25%
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col lg="4">
										<Card>
											<CardBody>
												<Button
													className="btn-block border-dark"
													onClick={this.handleSelection}
													name="sugarLevel"
													value="50%"
													active={this.state.sugarLevel === '50%'}
													color={
														this.state.sugarLevel === '50%'
															? 'info'
															: 'transparent'
													}
												>
													50%
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col lg="4">
										<Card>
											<CardBody>
												<Button
													className="btn-block border-dark"
													onClick={this.handleSelection}
													name="sugarLevel"
													value="75%"
													active={this.state.sugarLevel === '75%'}
													color={
														this.state.sugarLevel === '75%'
															? 'info'
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

						<Col md="6">
							<Card>
								<CardImg src="assets/bottles.jpg" />
								<CardImgOverlay>
									<Row>
										<Col>
											<h4>Tea base</h4>
										</Col>
									</Row>
								</CardImgOverlay>
								<Row>
									<Col>
										<Card>
											<CardBody>
												<Button
													className="btn-block border-dark"
													onClick={this.handleSelection}
													name="teaBase"
													value="milk tea"
													active={this.state.teaBase === 'milk tea'}
													color={
														this.state.teaBase === 'milk tea'
															? 'info'
															: 'transparent'
													}
												>
													Milk Tea
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col>
										<Card>
											<CardBody>
												<Button
													className="btn-block border-dark"
													onClick={this.handleSelection}
													name="teaBase"
													value="black"
													active={this.state.teaBase === 'black'}
													color={
														this.state.teaBase === 'black'
															? 'info'
															: 'transparent'
													}
												>
													Black Tea
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col>
										<Card>
											<CardBody>
												<Button
													className="btn-block border-dark"
													onClick={this.handleSelection}
													name="teaBase"
													value="green"
													active={this.state.teaBase === 'green'}
													color={
														this.state.teaBase === 'green'
															? 'info'
															: 'transparent'
													}
												>
													Green Tea
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col>
										<Card>
											<CardBody>
												<Button
													className="btn-block border-dark"
													onClick={this.handleSelection}
													name="teaBase"
													value="oolong"
													active={this.state.teaBase === 'oolong'}
													color={
														this.state.teaBase === 'oolong'
															? 'info'
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
							<Card>
								<CardImg src="assets/bobaCup.jpg" />
								<CardImgOverlay>
									<Row>
										<Col>
											<h4>Toppings</h4>
										</Col>
									</Row>
								</CardImgOverlay>

								<Row className="mt-3">
									<Col>
										<Card>
											<CardBody>
												<CardTitle />
												Boba Pearls
												<Input
													type="checkbox"
													value="Boba Pearls"
													onChange={this.handleToppings}
												>
													Boba Pearls
												</Input>
											</CardBody>
										</Card>
									</Col>
									<Col>
										<Card>
											<CardBody>
												<CardTitle />
												<h5>Adzuki Bean</h5>

												<Input
													type="checkbox"
													value="Adzuki Bean"
													onChange={this.handleToppings}
												>
													Red Bean
												</Input>
											</CardBody>
										</Card>
									</Col>
									<Col>
										<Card>
											<CardBody>
												<CardTitle />
												Tea Jelly
												<Input
													type="checkbox"
													value="Tea Jelly"
													onChange={this.handleToppings}
												>
													Tea Jelly
												</Input>
											</CardBody>
										</Card>
									</Col>
								</Row>

								<Row className="mt-3">
									<Col>
										<Card>
											<CardBody>
												<CardTitle />
												Pudding
												<Input
													type="checkbox"
													value="Pudding"
													onChange={this.handleToppings}
												>
													Pudding
												</Input>
											</CardBody>
										</Card>
									</Col>
									<Col>
										<Card>
											<CardBody>
												<CardTitle />
												Mixed Fruit
												<Input
													type="checkbox"
													value="Mixed Fruit"
													onChange={this.handleToppings}
												>
													Miced Fruit
												</Input>
											</CardBody>
										</Card>
									</Col>
									<Col>
										<Card>
											<CardBody>
												<CardTitle />
												Lychee Jelly
												<Input
													type="checkbox"
													value="Lychee Jelly"
													onChange={this.handleToppings}
												>
													Lychee Jelly
												</Input>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
				</Form>
				<Row className="mt-3">
					<Col>
						<Button className="btn-block" onClick={this.handleSubmit}>
							SUBMIT
						</Button>
					</Col>
				</Row>
			</Col>
		);
	}
}

export default OrderCard;
