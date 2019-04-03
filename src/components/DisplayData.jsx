import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';

class DisplayData extends Component {
  render() {
    let phoneBookList = this.props.phoneBookList.map((item, index) => {
      return (
        <tr key={index}>
          <th>{index + 1}</th>
          <th>{}</th>
          <th>{}</th>
          <th><Button variant="secondary">Edit</Button> <Button variant="danger">Delete</Button></th>
        </tr>
      )
    })
    return (
      <div className="display-data">
        <Button variant="success">Add new phone number</Button>
        <div className="num-list mt-4">
          <Table borderless hover responsive className="w-100">
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
        </div>
      </div>
    )
  }
}

export default DisplayData;
