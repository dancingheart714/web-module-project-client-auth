import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Friends from './Components/Friends';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome!</h1>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route render={(props) => <Login {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
