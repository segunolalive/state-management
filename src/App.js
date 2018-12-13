import React, { Component } from 'react';
import Layout from './components/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route component={Layout} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
