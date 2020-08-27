import React, { Component } from 'react'
import { Container, Form, Col, Button } from 'react-bootstrap'
import 'components/contact/contact.css'

export class Contact extends Component {
    render() {
        return (
            <div className="contacts">
                <Container fluid>
                    <div className="contact-info">
                            <h1>Wanna know me More?</h1>
                            <p>Let's be friends</p>
                    </div>
                    <div className="contact-box">
                        <div className="contact-form">
                            <Form>
                            
                            <Form.Row>
                            
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" />
                                </Col>

                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" />
                                </Col>
                            
                            </Form.Row>

                            <Form.Group controlId="formGridEmail" style={{marginTop: '1rem'}}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder="holmes@gmail.com" />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="221 Baker St" />
                            </Form.Group>

                            <Form.Row>
                            
                              <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose" id="inlineFormCustomSelect" custom >
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                              </Form.Group>
                            
                            </Form.Row>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="5" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                            </Form>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Contact
