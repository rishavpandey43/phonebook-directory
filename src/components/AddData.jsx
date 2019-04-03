import React, { Component } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';


class AddData extends Component {
  render() {
    return (
      <div className="add-data">
        <Button variant="secondary">Back</Button>
        <Form size>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" placeholder="Number" />
            </Col>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default AddData;
