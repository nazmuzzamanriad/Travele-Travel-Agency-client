import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import "./Register.css"


const Register = () => {
    const { emailInput, passInput, registerButton, displayUserNam, regError } = useAuth();
    return (

        <div>
            <div className='container'>
                <div className='registrationForm'>
                    <div >
                        <img
                            alt=""
                            src="./travel.png"
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                        />
                        <h1>Travele account create</h1>
                        <h6>Create your account.it's free only takes a minute</h6>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={emailInput} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted" >
                                    <p>{regError}</p>
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={passInput} type="password" placeholder="Password" />
                            </Form.Group>

                            <Button onClick={registerButton} className='registerButton' variant="primary" type="button">
                                Register
                            </Button>
                            <p>Already a member? <Link className='loginLink' to="/login" >Login</Link></p>
                        </Form>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Register;