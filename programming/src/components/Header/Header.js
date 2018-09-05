import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      panelDisplay: false
    };
  }

  handleToggle() {
    this.setState({
      panelDisplay: !this.state.panelDisplay
    })
  }

  render() {
    const iconClassName = `topnav ${this.state.panelDisplay ? 'responsive' : ''}`;

    return (
      <nav className={iconClassName}>
        <Link to='/'>Home</Link>
        <Link to='/one'>Add Number</Link>
        <Link to='/two'>Change Color</Link>
        <span className="icon" onClick={this.handleToggle}><i className="fa fa-bars"/></span>
      </nav>
    );
  }
}

export default Header;