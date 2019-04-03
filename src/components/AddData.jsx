import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';


class AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneBookList: this.props.phoneBookList,
      newData: {
        name: "",
        number: "",
      },
    }
    this.nameRef = React.createRef();
    this.numberRef = React.createRef();
  }

  handleChange = (ref, target) => {
    let tempData = this.state.newData;
    tempData[target] = ref.current.value;
    this.setState({ newData: tempData });
  }

  back = () => {
    this.props.openCloseAddDataDiv();
    this.setState({newData: { name: "", number: null }});
  }

  cancelDetail = () => {
    this.nameRef.current.value = "";
    this.numberRef.current.value = "";
    this.setState({newData: { name: "", number: null }});
  }

  saveDetail = () => {
    if (this.state.newData.name === "" || this.state.newData.name == null) {
      alert("Name can't be empty");
      this.nameRef.current.focus();
    }
    else if ((this.state.newData["number"].toString().length != 10)) {
      alert("Phone number should be of 10 digit");
      this.numberRef.current.focus();
    }
    else {
      this.setState({newData: { name: "", number: null }});
      let tempData = this.state.phoneBookList;
      tempData.push(this.state.newData);
      this.setState({ phoneBookList: tempData});
      this.props.saveData(this.state.phoneBookList);
      this.props.openCloseAddDataDiv();
    }
  }

  render() {
    return (
      <div className="add-data">
        <div className="edit-div mt-4 col-12 col-md-6">
          <Button variant="light" className="mb-4" onClick={this.back}>Back</Button>
          <Form>
            <Form.Group controlId="name">
              <Form.Label sm="2">
                Name:
              </Form.Label>
              <Form.Control type="text" ref={this.nameRef} defaultValue={this.state.newData.name} placeholder="enter your name" onChange={this.handleChange.bind(null, this.nameRef, "name")} />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label sm="2">
                Phone number:
              </Form.Label>
              <Form.Control type="number" ref={this.numberRef} defaultValue={this.state.newData.number} placeholder="enter your number" onChange={this.handleChange.bind(null, this.numberRef, "number")} />
            </Form.Group>
            <div className="data-preview mb-3">
              <h5 className="text-primary">Subscriber to be added:</h5>
              <label>Name:</label><span> {this.state.newData.name}</span>
              <br/>
              <label>Number:</label><span> {this.state.newData.number}</span>
            </div>
              <Button variant="secondary" className="mr-2" onClick={this.cancelDetail}>Cancel</Button>
              <Button variant="success" className="ml-2" onClick={this.saveDetail}>Save number</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default AddData;
