import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
   c = "John"
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5} country="in" apiKey="6d026a2663364991846858f60eedf8fb" category="science"/>
      </div>
    )
  }
}

