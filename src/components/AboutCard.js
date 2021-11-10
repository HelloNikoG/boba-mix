import React from 'react';
import { Container, Col, Row, Card, CardImg, CardText } from 'reactstrap';

function AboutCard() {
	return (
		<Container fluid>
			<Row className="mt-3">
				<Col md="6">
					<Card className="border-0 rounded-0">
						<CardImg className="img-fluid" src="/assets/streetboba.jpg" />
					</Card>
				</Col>

				<Col md="6">
					<Card>
						<CardText>
							<h3>What is Boba? </h3>
							<p>
								Created in Taiwan in the 1980s, with much dispute over what
								exact region and shop originated it, bubble tea establishments
								began popping up in the United States by the '90s. Today, it's
								hard to visit any major city without seeing one of these trendy
								drink cafes, many of which serve snacks and treats alongside
								their specialty beverages. But what exactly is boba, the chewy
								little spheres at the bottom of your drink? You're about to find
								out:
							</p>
							<h3>What is Boba Made From? </h3>
							<p>
								Boba is made from tapioca starch, also known as cassava starch,
								which is why they're often also labeled as "tapioca pearls."
								They're small spheres that are often simmered in a brown sugar
								syrup to give them a sweet taste and dark black color. Boba is
								practically tasteless, making it easy to pair with a variety of
								drinks. There are also popping boba varieties, which are often
								colorful and filled with fruit-flavored syrups like strawberry
								or lychee.
							</p>
							<h3>How is Boba Used?</h3>
							<p>
								Boba's most popular use is in bubble tea, which is also called
								pearl tea, tapioca tea, or (confusingly enough) boba. The term
								"boba" is used interchangeably to refer to the tapioca pearls at
								the bottom of the drink and to the drink itself. Traditional
								bubble tea is often made by layering the prepared boba, then
								pouring in black or green tea that has been made creamy with
								milk, sweetened condensed milk, or some type of cream. You can
								also often get other drinks—like smoothies, slushies, or even
								coffees—with boba included at some bubble tea shops.{' '}
							</p>
						</CardText>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default AboutCard;
