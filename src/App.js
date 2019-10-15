import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Start from "./start"
import Meme from "./meme.js"

function App() {
  return (
  <div>
  <Router>
    <Switch>
      <Route path="/" exact component={Start}/> 
      <Route path="/meme" component={Meme}/>
    </Switch>
    </Router>
  </div>
  );
}

export default App;
