import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <h3>{this.props.displayDataDiv === true ? "PhoneBook Directory" : "Add Subscriber"}</h3>
      </header>
    )
  }
}

export default Header;
