import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Icon } from 'antd';
import 'antd/dist/antd.css'
import App from './App';
import SignIn from './containers/SignIn';
import Register from './containers/Register';


export default function Game() {
  return (
    <Router>
      <div className="container">
        <div className="listDisplay">
          <ul style={{ listStyleType: 'none', fontSize:'20px' }}>
            <li>
              <Link to="/"><Icon type="home" /> Home</Link>
            </li>
            <li>
              <Link to="/register"><Icon type="smile" theme="twoTone" twoToneColor="#eb2f96"/> Register</Link>
            </li>
            <li>
              <Link to="/signin"><Icon type="heart" theme="twoTone" twoToneColor="#52c41a" /> Sign In</Link>
            </li>
          </ul>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="actionDisplay">
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
