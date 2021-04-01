import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Staggered from './component/staggered/staggered';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <ul className="left">
            <li>
              <Link to="/staggered">staggered</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <div className="right">
            <Switch>

              <Route exact path="/staggered">
                <Staggered></Staggered>
              </Route>
              <Route path="/about">
                {/* <About /> */}
              </Route>
              <Route path="/dashboard">
                {/* <Dashboard /> */}
              </Route>
            </Switch>
          </div>

        </div>
      </Router>
    </div>
  );
}

export default App;
