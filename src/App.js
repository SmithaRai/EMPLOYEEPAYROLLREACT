import './App.css';
import PayrollForm from './component/Payroll-form/payroll-form';
import Header from "./component/Header/Header";
import  Home from './component/payroll-dashboard/payroll-dashboard';
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
     <Header />
      <div className="App">
      <Router>
              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/payroll-form" element={<PayrollForm/>}/>
              </Routes>
              </Router>
        </div>
      </>
  );
}

export default App;