import React from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Loader from 'react-loader-spinner';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
            isLoading: false
        }
    };

    handleChange = (e) => {
        this.setState({
            credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        },
    })
};

login = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', this.state.credentials)
    .then((res) => {
        console.log(res)
        window.localStorage.setItem('token', JSON.stringify(res.data.payload);
        this.props.history.push('/protected');
    })
    .catch((err) => {
        console.log(err))
    }

render () {
    return (
        <div>
        <form onSubmit={this.login}>
        <input
        type="text"
        name="username"
        value={this.state.credentials.username}
        onChange={this.handleChange}
        />
        <input
        type="password"
        name="password"
        value={this.state.credentials.password}
        onChange={this.handleChange}
        />
        <button>Log in</button>
        {this.state.credentials.isLoading === true && (
            <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
            />
        )}
    </form>    
</div>
)
}
}

export default Login;
