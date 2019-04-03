import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';

class DisplayData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editData: {
        name: "",
        number: null
      }
    }
  }

  openAddDataDiv = () => {
    this.props.openAddDataDiv();
  }
  render() {
    let phoneBookList = this.props.phoneBookList.map((item, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.number}</td>
          <td><Button variant="secondary">Edit</Button> <Button variant="danger">Delete</Button></td>
        </tr>
      )
    });
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
        <Button variant="success" onClick={this.openAddDataDiv}>Add new phone number</Button>
        <div className="num-list mt-4">
          {
            this.props.phoneBookList.length > 1 ? mainData : (<h4>No Phone number currently available to directory, Add a new phone number to continue.</h4>)
          }
        </div>
      </div>
    )
  }
}

export default DisplayData;
