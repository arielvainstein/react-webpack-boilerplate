/**
 * Module dependencies
 */
import React from 'react';
import Home from './pages/home';

/**
 * UI Components
 */

/**
 * View Component
 */
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
   
    return (
        <Home />
    );
  }
}