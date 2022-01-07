/**
 * Module dependencies
 */
import React from 'react';
import './styles.scss';

/**
 * UI Components
 */

/**
 * View Component
 */
export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
   
    return (
        <div className='home'>HOLA MUNDO!</div>
    );
  }
}

