import React, { Component } from 'react';
import "./App.css";
import Header from "./components/Header";
import AddData from "./components/AddData";
import DisplayData from "./components/DisplayData";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneBookList: [
        {
          name: "John Doe",
          number: 9777777788,
        },
        {
          name: "Jane Doe",
          number: 9558877788,
        },
      ],
      displayDataDiv: true,
      AddDataDiv: false,
    }
  }

  addNewData = () => {
    console.log('Added');
  }

  editData = () => {

  }

  deleteData = () => {

  }

  openAddDataDiv = () => {
    this.setState({displayDataDiv: false});
  }

  openDisplayDataDiv = () => {
    this.setState({displayDataDiv: true});
  }

  render() {
    return (
      <div className="App">
        <Header displayDataDiv={this.state.displayDataDiv}></Header>
        <main className="main-div container">
          {this.state.displayDataDiv === true ? <DisplayData phoneBookList={this.state.phoneBookList} openAddDataDiv={this.openAddDataDiv}/> : <AddData openDisplayDataDiv={this.openDisplayDataDiv}/>}
        </main>
      </div>
    );
  }
}

export default App;
