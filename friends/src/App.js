import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './Components/PrivateRoute';
import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import NewFriend from './Components/NewFriend';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  const logout = () => {
    window.localStorage.removeItem('token');
  };

  return (
    <div className="App">
      <Router>
        <Container>
          <Navbar
            className="nav"
            variant="dark"
            expand="lg"
            style={{ backgroundColor: 'lightblue' }}
          >
            <Navbar.Brand className="brand" style={{ color: 'black' }}>
              Friends!
            </Navbar.Brand>
            <Navbar.Collapse
              className="nav-container"
              id="responsive-navbar-nav"
            >
              <Nav className="mr-auto">
                <Nav.Link className="nav-link" href="/login">
                  Login
                </Nav.Link>
                <Nav.Link className="nav-link" onClick={logout}>
                  Logout
                </Nav.Link>
                <Nav.Link className="nav-link">Protected Page</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        <Switch>
          <PrivateRoute exact path="/protected">
            <NewFriend />
            <FriendsList />
          </PrivateRoute>
          <Route exact path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
