import React from 'react';
import './App.css';
import Payrollform from './components/payroll-form/Payrollform.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom"
import HomePage from './components/home-page/Homepage'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/payroll-form"><Payrollform/></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;