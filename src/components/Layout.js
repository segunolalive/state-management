import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Page from './Page';
import './Layout.css';

class Layout extends Component {
  state = {
    routes: {
      profile: {
        topic: 'who are you?',
        comments: [
          "I'm Femi, a software developer fro Nigeria - Femi",
          "I'm Balu. I play the tuba - Balu",
          'Fiendish little minx - Jessica'
        ]
      },
      photos: {
        topic: 'Do you take photos?',
        comments: [
          'Yes, I do. A lot! - Shanit',
          'Yup, yup! Sefies all the way - Sinatra',
          "Nah! I don't. Who has time for that? - Biggie"
        ]
      },
      '': {
        topic: 'Welcome Home. This is the homepage',
        comments: ["Whoop! whoop! It's cool to be here - Bamidele"]
      }
    },
    currentLocation: ''
  };

  getRoutes = () => Object.keys(this.state.routes);

  static getDerivedStateFromProps(props) {
    return { currentLocation: props.location.pathname.slice(1) };
  }

  render() {
    return (
      <>
        <Sidebar routes={this.getRoutes()} />
        <main>
          <Page page={this.state.routes[this.state.currentLocation]} />
        </main>
      </>
    );
  }
}

export default Layout;
