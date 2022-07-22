import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
            isNavOpen: false,
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="sm">
                    <div className="container-fluid">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="mx-auto ml-auto nav-fill w-100" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <p>About</p>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <p>Gallery</p>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" id="brand" to="/home">
                                        <p>PebbleSmith Fine Art</p>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" to="/contact">
                                        <p>Blog</p>
                                    </NavLink>
                                </NavItem>
                                <NavLink className="nav-link" to="/contact">
                                    <p>Contact</p>
                                </NavLink>
                            </Nav>
                        {/* <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <h5>About</h5>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <h5>My Skills</h5>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <h5>Projects</h5>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" to="/contact">
                                        <h5>Contact</h5>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="mx-auto text-center">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <h3 id="brand">PebbleSmith Fine Art</h3>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar>
                                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                            </Nav> */}
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;