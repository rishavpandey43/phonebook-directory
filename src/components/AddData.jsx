import React, { Component } from 'react';
import { ButtonToolbar, Button, Form, Row, Col } from 'react-bootstrap';


class AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: {
        name: "",
        number: null,
      },
    }
    this.nameRef = React.createRef();
    this.numRef = React.createRef();
  }

  handleChange = (ref, target) => {
    let tempData = this.state.newData;
    tempData[target] = ref.current.value;
    this.setState({ newData: tempData });
  }

  back = () => {

  }
  render() {
    return (
      <div className="add-data">
        <div className="edit-div mt-4 col-12 col-md-6">
          <Button variant="light" className="mb-4" onClick={}>Back</Button>
          <Form>
            <Form.Group controlId="formPlaintextEmail">
              <Form.Label sm="2">
                Name:
              </Form.Label>
              <Form.Control type="text" ref={this.nameRef} defaultValue={this.state.newData.name} placeholder="enter your name" onChange={this.handleChange.bind(null, this.nameRef, "name")} />
            </Form.Group>
            <Form.Group controlId="formPlaintextPassword">
              <Form.Label sm="2">
                Phone number:
              </Form.Label>
              <Form.Control type="number" ref={this.numRef} defaultValue={this.state.newData.number} placeholder="enter your number" onChange={this.handleChange.bind(null, this.numRef, "number")} />
            </Form.Group>
            <div className="data-preview mb-3">
              <h5 className="text-primary">Subscriber to be added:</h5>
              <label>Name:</label><span> {this.state.newData.name}</span>
              <br/>
              <label>Number:</label><span> {this.state.newData.number}</span>
            </div>
            <ButtonToolbar >
              <Button variant="secondary" className="mr-2">Cancel</Button>
              <Button variant="success" className="ml-2">Submit</Button>
            </ButtonToolbar>
          </Form>
        </div>
      </div>
    )
  }
}

export default AddData;
