import './App.css';
import PayrollForm from './component/Payroll-form/payroll-form';
import Header from "./component/Header/Header";
import PayrollDashboard from './component/payroll-dashboard/payroll-dashboard';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <div className="App">
              <Routes>
                  <Route exact path="/payroll-dashboard" component={PayrollDashboard}/>
                  <Route exact path="/payroll-form" component={PayrollForm}/>
              </Routes>
        </div>
      </Router>
      </>
  );
}

export default App;