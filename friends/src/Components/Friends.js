import React from 'react';

import { axiosWithAuth } from '../Utils/axiosWithAuth';
import { Container } from 'reactstrap';

class Friends extends React.Component {
  state = {
    friends: [],
    initialState: {
      name: '',
      age: '',
      email: '',
    },
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/api/friends')
      .then((res) => {
        console.log(res);
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    this.setState({
      initialState: {
        ...this.state.initialState,
        [event.target.name]: event.target.value,
      },
    });
  };

  newFriend = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post('/api/friends', {
        name: this.state.initialState.name,
        age: this.state.initialState.age,
        email: this.state.initialState.email,
      })
      .then((res) => {
        console.log(res);

        this.setState({
          friends: res.data,
          initialState: {
            name: '',
            age: '',
            email: '',
          },
        });
      });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.friends.map((person) => {
            return (
              <div>
                <h3>{person.name}</h3>
                <h4>{person.age}</h4>
                <h4>{person.email}</h4>
                <br></br>
              </div>
            );
          })}
        </div>
        <Container>
          <form onSubmit={this.newFriend}>
            <input
              type="text"
              name="name"
              value={this.state.initialState.name}
              onChange={this.handleChange}
              placeholder="name"
            />
            <input
              type="number"
              name="age"
              value={this.state.initialState.age}
              onChange={this.handleChange}
              placeholder="age"
            />
            <input
              type="text"
              name="email"
              value={this.state.initialState.email}
              onChange={this.handleChange}
              placeholder="email"
            />
            <button>Add A New Friend</button>
          </form>
        </Container>
      </div>
    );
  }
}
export default Friends;
