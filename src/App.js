import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

const App = () => {
  const c = "John"
  const apiKey = "117c67bbc452dd061c4f7d65ca8ce465"
  const country = "in"

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={4}
        />
        <Navbar />
        <Routes>
          {/* provide unique key inside newscomponent to remount on changing categories */}
          <Route exact path="/" element=<News setProgress={setProgress} key="general" author="unknown" date="" pageSize={9} source="unknown" country={country} apiKey={apiKey} category="general" /> />
          <Route exact path="/science" element=<News setProgress={setProgress} key="science" author="unknown" date="" pageSize={9} source="unknown" country={country} apiKey={apiKey} category="science" /> />
          <Route exact path="/business" element=<News setProgress={setProgress} key="business" author="unknown" date="" pageSize={9} source="unknown" country={country} apiKey={apiKey} category="business" /> />
          <Route exact path="/sports" element=<News setProgress={setProgress} key="sports" author="unknown" date="" pageSize={9} source="unknown" country={country} apiKey={apiKey} category="sports" /> />
          <Route exact path="/entertainment" element=<News setProgress={setProgress} key="entertainment" author="unknown" date="" pageSize={9} source="unknown" country={country} apiKey={apiKey} categorexact y="entertainment" /> />
          <Route exact path="/technology" element=<News setProgress={setProgress} key="technology" author="unknown" date="" pageSize={9} source="unknown" country={country} apiKey={apiKey} category="technology" /> />
          <Route exact path="/health" element=<News setProgress={setProgress} key="health" author="unknown" date="" pageSize={9} source="unknown" country={country} apiKey={apiKey} category="health" /> />
        </Routes>


      </BrowserRouter>

    </div>
  )
}
export default App

