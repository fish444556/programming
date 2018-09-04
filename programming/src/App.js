import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const pageOne = () => {
  return (
    <div>
      Page1
    </div>
  );
}

const pageTwo = () => {
  return (
    <div>
      Page2
    </div>
  );
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/one" component={pageOne} />
              <Route exact path="/two" component={pageTwo} />
              {/* <Route path="/blogs" component={Dashboard} /> */}
              <Route path="/" component={pageOne} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
