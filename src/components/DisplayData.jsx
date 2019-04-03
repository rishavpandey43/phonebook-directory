import React, { Component } from 'react';
import { Button, Table, Form } from 'react-bootstrap';

class DisplayData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneBookList: this.props.phoneBookList,
    }
    this.nameRef = React.createRef();
    this.numberRef = React.createRef();
  }
  componentWillReceiveProps(props) {
    let tempData = props.phoneBookList.map(item => {
      item["editDetail"] = false;
      return item;
    });
    this.setState({phoneBookList: tempData});
  }

  openCloseAddDataDiv = () => {
    this.props.openCloseAddDataDiv();
  }

  editDetail = (i) => {
    let tempData = JSON.parse(JSON.stringify(this.state.phoneBookList));
    tempData[i].editDetail = true;
    this.setState({ phoneBookList: tempData });
  }

  saveDetail = (i, e) => {
    let tempData = JSON.parse(JSON.stringify(this.state.phoneBookList));
    console.log(tempData[i]["number"].toString().length);
    if ((tempData[i]["number"].toString().length != 10)) {
      alert("Phone number should be of 10 digit");
      this.numberRef.current.focus();
    }
    else if (tempData[i]["name"].length === "" || tempData[i]["name"].length == null) {
      alert("Name can't be empty");
      this.nameRef.current.focus();
    }
    else {
      tempData[i].editDetail = false;
      this.setState({ phoneBookList: tempData});
      this.props.saveData(this.state.phoneBookList);
    }
  }

  deleteDetail = (i) => {
    this.props.deleteData(i);
  }

  handleChange = (i, target, e) => {
    let tempData = JSON.parse(JSON.stringify(this.state.phoneBookList));
    tempData[i][target] = e.target.value;
    this.setState({ phoneBookList: tempData});
  }
  render() {
    let phoneBookList = [];
    if (this.state.phoneBookList) {
      phoneBookList = this.state.phoneBookList.map((item, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.editDetail ? <Form.Group><Form.Control ref={this.nameRef} className="col-12 col-sm-6" type="text" defaultValue={item.name} placeholder="enter your name" onChange={this.handleChange.bind(null, index, "name")}/></Form.Group> : item.name}</td>
            <td>{item.editDetail ? <Form.Group><Form.Control ref={this.numberRef} className="col-12 col-sm-6" type="number" defaultValue={item.number} placeholder="enter your number" onChange={this.handleChange.bind(null, index, "number")}/></Form.Group> : item.number}</td>
            <td>{item.editDetail ? <Button variant="success" className="mr-2" onClick={this.saveDetail.bind(null, index)}>Save</Button>:<Button variant="secondary" className="mr-2" onClick={this.editDetail.bind(null, index)}>Edit</Button>}<Button variant="danger" className="delete-btn" onClick={this.deleteDetail.bind(null, index)}>Delete</Button></td>
          </tr>
        )
      });
    }
    let mainData = (
      <Table borderless hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone number</th>
            <th>Perform Action</th>
          </tr>
        </thead>
        <tbody>
          {phoneBookList}
        </tbody>
      </Table>
    )
    return (
      <div className="display-data">
        <Button variant="success" onClick={this.openCloseAddDataDiv}>Add new phone number</Button>
        <div className="num-list mt-4">
          {
            this.state.phoneBookList ? (this.state.phoneBookList.length >= 1 ? mainData : (<h4>No Phone number currently available to directory, Add a new phone number to continue further.</h4>)) : ""
          }
        </div>
      </div>
    )
  }
}

export default DisplayData;
