import React, { Component } from 'react';
import "./App.css";
import Header from "./components/Header";
import AddData from "./components/AddData";
import DisplayData from "./components/DisplayData";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneBookList: [{}, {}, {}],
      displayDirectory: false,
    }
  }

  addNewNumber = () => {
    console.log('Added');
  }

  render() {
    return (
      <div className="App">
        <Header displayDirectory={this.state.displayDirectory}></Header>
        <main className="main-div container">
          {this.state.displayDirectory === true ? <DisplayData phoneBookList={this.state.phoneBookList}/> : <AddData/>}
        </main>
      </div>
    );
  }
}

export default App;
