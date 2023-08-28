import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  c = "John"
  apiKey = "3442dd4c2fd1462787da05c659994e13"
  country = "in"

  state = {
    progress:0
  }

  setProgress =(progress) => {
    this.setState({progress: progress})
  }
  

  render() {
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={4}
          />
          <Navbar />
          <Routes>
            {/* provide unique key inside newscomponent to remount on changing categories */}
            <Route exact path="/" element=<News setProgress={this.setProgress} key="general" author="unknown" date="" pageSize={9} source="unknown" country={this.country} apiKey={this.apiKey} category="general" /> />
            <Route exact path="/science" element=<News setProgress={this.setProgress} key="science" author="unknown" date="" pageSize={9} source="unknown" country={this.country} apiKey={this.apiKey} category="science" /> />
            <Route exact path="/business" element=<News setProgress={this.setProgress} key="business" author="unknown" date="" pageSize={9} source="unknown" country={this.country} apiKey={this.apiKey} category="business" /> />
            <Route exact path="/sports" element=<News setProgress={this.setProgress} key="sports" author="unknown" date="" pageSize={9} source="unknown" country={this.country} apiKey={this.apiKey} category="sports" /> />
            <Route exact path="/entertainment" element=<News setProgress={this.setProgress} key="entertainment" author="unknown" date="" pageSize={9} source="unknown" country={this.country} apiKey={this.apiKey} categorexact y="entertainment" /> />
            <Route exact path="/technology" element=<News setProgress={this.setProgress} key="technology" author="unknown" date="" pageSize={9} source="unknown" country={this.country} apiKey={this.apiKey} category="technology" /> />
            <Route exact path="/health" element=<News setProgress={this.setProgress} key="health" author="unknown" date="" pageSize={9} source="unknown" country={this.country} apiKey={this.apiKey} category="health" /> />
          </Routes>


        </BrowserRouter>

      </div>
    )
  }
}

