import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Page from './Page';
import state, { Provider } from './state';
import './Layout.css';



class Layout extends Component {
  state = {currentLocation: ''};

  static getDerivedStateFromProps(props) {
    return { currentLocation: props.location.pathname.slice(1) };
  }

  render() {
    return (
      <Provider value={state}>
        <Sidebar />
        <main>
          <Page location={this.state.currentLocation} />
        </main>
      </Provider>
    );
  }
}

export default Layout;
