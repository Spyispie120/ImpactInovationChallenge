import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Login from './Login';
import Recipient from './Recipient';
import Donor from './Donor';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/recipient" component={Recipient}/>
        <Route path="/donor" component={Donor}/>
      </Router>
    </div>
  );
}

export default App;
