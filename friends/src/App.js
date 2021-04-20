import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Navbar
            className="nav"
            variant="dark"
            expand="lg"
            style={{ backgroundColor: 'lightblue' }}
          >
            <Navbar.Brand className="brand" style={{ color: 'black' }}>
              Welcome Friends!
            </Navbar.Brand>
            <Navbar.Collapse
              className="nav-container"
              id="responsive-navbar-nav"
            >
              {/* <Nav className="mr-auto">
                <Nav.Link className="nav-link" href="/login">
                  Authorized Friends Log In Here
                </Nav.Link>
              </Nav> */}
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <div>
          <Switch>
            <PrivateRoute exact path="/protected" component={FriendsList} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
