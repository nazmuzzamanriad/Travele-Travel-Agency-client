import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../../../images/travel.png'

import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand as={Link} to='/home'>
                        <img
                            alt=""
                            src={pic}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        travele
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav

                            style={{ maxHeight: '100px' }}
                            navbarScroll

                        >
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>


                            <Nav.Link as={Link} to='/myorder'>My Order</Nav.Link>
                            <Nav.Link as={Link} to='/addnewdestination'>Add a New Destination</Nav.Link>
                            <p className='nameStyle'>{user.displayName}</p>
                            {user.email ? <button onClick={logOut}>Logout</button> :
                                <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                            }


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div >
    );
};

export default Header;