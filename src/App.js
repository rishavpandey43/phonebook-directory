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
      displayData: true,
    }
  }

  addNewNumber = () => {
    console.log('Added');
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <main className="main-div container">
          {this.state.displayData === false ? <DisplayData phoneBookList={this.state.phoneBookList}/> : <AddData/>}
        </main>
      </div>
    );
  }
}

export default App;
