import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

function Welcome(props) {
    return (
        <div className="container-fluid" 
                style={{
                    display: 'block',
                    position: 'relative',
                    paddingBottom: '120vw',
                    paddingTop: '100vw',
                backgroundImage: `url("assets/images/brando3.jpg")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed',
                width: '100vw',
                height: '120vw'
                }}
                >
                    <Nav>
                        <NavItem className="mx-auto fixed-bottom font-face-rt">
                            <NavLink className="nav-link" to="/home">
                                <h1 className="fade-in-text mx-auto" id="entrance">
                                    <span>Speak Friend &amp; Enter</span>
                                </h1>
                            </NavLink>
                        </NavItem>
                    </Nav>
        </div>
    );
}

export default Welcome;  