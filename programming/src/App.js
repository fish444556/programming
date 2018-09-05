import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

class App extends Component {

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
