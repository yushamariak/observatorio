import React, { Component } from 'react';

import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';

export default class ObservatorioMenu extends Component {
	render() {
		return (
			<div>
				<Navbar inverse collapseOnSelect>
					<NavbarHeader>
						<NavbarBrand>
							<a href="#brand">Observatório IFTM</a>
						</NavbarBrand>
						<NavbarToggle />
					</NavbarHeader>
					<NavbarCollapse>
						<Nav>
							<NavDropdown eventKey={1} title="Indicadores" id="indicadores-dropdown">
								<MenuItem eventKey={1.1}>Produção por instituto</MenuItem>
								<MenuItem eventKey={1.2}>Produção por ano</MenuItem>
							</NavDropdown>
							<NavDropdown eventKey={2} title="Pesquisadores" id="pesquisadores-dropdown">
								<MenuItem eventKey={2.1}>Formação</MenuItem>
								<MenuItem eventKey={2.2}>Temas de pesquisa</MenuItem>
							</NavDropdown>
							<NavItem eventKey={1} href="#">Sobre</NavItem>
						</Nav>
					</NavbarCollapse>
				</Navbar>
			</div>
		)
	}
}