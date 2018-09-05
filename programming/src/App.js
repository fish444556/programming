import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header/>
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
