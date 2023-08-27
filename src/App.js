import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  c = "John"
  render() {
    return (
      <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
          {/* provide unique key inside newscomponent to remount on changing categories */}
          <Route exact path="/"  element=<News key="general"  pageSize={5} country="in" apiKey="6d026a2663364991846858f60eedf8fb" category="general" /> />
            <Route exact path="/science"  element=<News key="science"  pageSize={5} country="in" apiKey="6d026a2663364991846858f60eedf8fb" category="science" /> />
            <Route exact path="/business"  element=<News key="business"  pageSize={5} country="in" apiKey="6d026a2663364991846858f60eedf8fb" category="business" /> />
            <Route exact path="/sports"  element=<News key="sports"  pageSize={5} country="in" apiKey="6d026a2663364991846858f60eedf8fb" category="sports" /> />
            <Route exact path="/entertainment"  element=<News key="entertainment"  pageSize={5} country="in" apiKey="6d026a2663364991846858f60eedf8fb" categorexact y="entertainment" /> />
            <Route exact path="/technology"  element=<News key="technology"  pageSize={5} country="in" apiKey="6d026a2663364991846858f60eedf8fb" category="technology" /> />
            <Route exact path="/health"  element=<News key="health"  pageSize={5} country="in" apiKey="6d026a2663364991846858f60eedf8fb" category="health" /> />
          </Routes>


        </BrowserRouter>

      </div>
    )
  }
}

