import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Login}/>
        <Route path='/dashboard' component={Dashboard}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
