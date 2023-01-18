import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Home } from './components/Home';
import { StartGame } from './components/StartGame';

const logo = `${require('./images/qpup_1.png')}`

function App() {
  return (
    <Router>
      <div>
        <div style={{
          backgroundColor: '#0160B8', display: 'block',
          overflow: 'auto'
        }}>
          <center>
            <img src={logo} style={{ borderRadius: '15%' }}></img>
          </center>
        </div>
        <div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/start-game" element={<StartGame />} />
            {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
