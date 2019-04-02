import React, { Component } from 'react';
import "./App.css";
import Header from "./components/Header";
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phonebookList: [],
      addData: true,
    }
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <main className="main-div container">
          <h1>Hello World</h1>
        </main>
      </div>
    );
  }
}

export default App;
