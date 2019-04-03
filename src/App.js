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
    }
  }

  deleteData = (i) => {
    let tempData = JSON.parse(JSON.stringify(this.state.phoneBookList));
    tempData.splice(i, 1);
    this.setState({ phoneBookList: tempData});
  }

  saveData = (data) => {
    this.setState({ phoneBookList: data});
  }

  openCloseAddDataDiv = () => {
    this.setState({displayDataDiv: this.state.displayDataDiv === true ? false : true});
  }

  render() {
    return (
      <div className="App">
        <Header displayDataDiv={this.state.displayDataDiv}></Header>
        <main className="main-div container">
          {this.state.displayDataDiv === true ? <DisplayData phoneBookList={this.state.phoneBookList} openCloseAddDataDiv={this.openCloseAddDataDiv} saveData={this.saveData} deleteData={this.deleteData}/> : <AddData phoneBookList={this.state.phoneBookList} saveData={this.saveData} openCloseAddDataDiv={this.openCloseAddDataDiv}/>}
        </main>
      </div>
    );
  }
}

export default App;
