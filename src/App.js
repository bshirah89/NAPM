import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
import BasicExample from './router'


 
//export default BasicExample;
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Action across the  hero banner */}
          <h1 className="App-title">Welcome to NAPM</h1>
        </header>
        <BasicExample />
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
       
        <header class="header" id="top">
          <div class="container overlay">
            <section id="overlay">
              <div class="text-vertical-center center">
                <div>
                  <h2>New Age Property Maintenance</h2>
                  <h1>We'll go out on a limb for you!</h1>
                  <h3>Call to schedule a quote today!</h3>
                
                  <a href="#contact" class="btn btn-dark btn-lg js-scroll-trigger">Contact</a>
                </div>
              </div>
            </section>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
