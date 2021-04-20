import React from 'react';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';
// import axios from 'axios';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class FriendsList extends React.Component {
  state = {
    friendsList: [],
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

  render() {
    return (
      <div>
        {this.state.friendsList.map((friend) => (
          <Card style={{ backgroundColor: 'green' }} body key={friend.id}>
            <CardBody>
              <CardTitle tag="h1">{friend.name}</CardTitle>
              <CardSubtitle tag="h2">{friend.age}</CardSubtitle>
              <CardText tag="h3">{friend.email}</CardText>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}
export default FriendsList;
