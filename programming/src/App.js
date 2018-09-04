import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';


const Header = () => (
  <div>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/one'>Add Number</Link></li>
        <li><Link to='/two'>Change Color</Link></li>
      </ul>
    </nav>
  </div>
);

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
