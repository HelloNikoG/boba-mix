import React from 'react';
import { Col, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function NavComponent() {
	const navStyle = {
		color: '#fff',
	};
	return (
		<>
			<Navbar color="dark" className="border-bottom border-dark p-0">
				<NavbarBrand className="m-0 p-0 mr-auto">
					<img src="/assets/logo.png" width="75" height="75" />
				</NavbarBrand>
				<div className="justify-content-center">
					<Nav className="mt-0 mb-0 p-0">
						<NavItem className="nav">
							<Link to="/order">
								<NavLink style={navStyle}>Order</NavLink>
							</Link>
						</NavItem>
						<NavItem className="nav">
							<Link to="/whatisboba">
								<NavLink style={navStyle}>What is Boba?</NavLink>
							</Link>
						</NavItem>
						<NavItem className="nav">
							<Link to="/contactus">
								<NavLink style={navStyle}>Contact Us</NavLink>
							</Link>
						</NavItem>
					</Nav>
				</div>
			</Navbar>
		</>
	);
}

export default NavComponent;
