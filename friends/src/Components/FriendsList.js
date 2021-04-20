import React from 'react';

import { axiosWithAuth } from '../Utils/axiosWithAuth';
import { Container } from 'reactstrap';

class FriendsList extends React.Component {
  state = {
    friendsList: [],
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
          friendsList: res.data,
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

  addFriend = (event) => {
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
          initialState: {
            name: '',
            age: '',
            email: '',
          },
        });
      });
  };

  formatData = () => {
    const formattedData = [];
    this.state.friendsList.forEach((friend) => {
      formattedData.push({
        name: friend.name,
        age: friend.age,
        email: friend.email,
      });
    });
    return formattedData;
  };

  render() {
    const friends = this.formatData();

    return (
      <div>
        <Container style={{ backgroundColor: lightgreen }}>
          <form onSubmit={this.addFriend}>
            <input
              type="text"
              name="name"
              value={this.state.initialState.name}
              onChange={this.handleChange}
              placeholder="name"
            />
            <input
              type="text"
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
            <button>Add Friend</button>
          </form>

          {this.state.friends.map((person) => {
            <div>
              <h3>{person.name}</h3>
              <h4>{person.age}</h4>
              <h4>{person.email}</h4>
              <br></br>
            </div>;
          })}
        </Container>
      </div>
    );
  }
}
export default FriendsList;
