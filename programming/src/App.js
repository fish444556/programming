import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';


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
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/one'>Add Number</Link></li>
          <li><Link to='/two'>Change Color</Link></li>
          <li className="icon" onClick={this.handleToggle}><i className="fa fa-bars"/></li>
        </ul>
      </nav>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header color={this.props.color}/>
            <Switch>
              <Route path="/one" component={PageOne} />
              <Route exact path="/two" component={PageTwo} />
              <Route path="/" component={PageOne} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
