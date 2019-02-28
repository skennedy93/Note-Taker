import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
//import { login } from '../redux/actions/actions';

 class Login extends React.Component {
  state = {
    username: '',
    password: '',
    message: null,
  };

   submitLogin = event => {
    const { username, password } = this.state;
    if (!username || !password) this.setState({ message: 'Please enter a username and a password.'})
    event.preventDefault();
    axios
      .post('http://localhost:4000/login', { username, password })
      .then(response => {
        console.log('response', response);
        if (response.status === 200) {
          this.props.login(response.data);
          this.props.history.push('/');
        } else if (response.status === 404) {
          this.setState({ message: 'The username or password is incorrect.' });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

   updateField = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

   render() {
    return (
      <div>
        <div className="card" style={{width: '75%',marginLeft: '10%',height:'600px'}}>
        <div className="card-body">
        <form onSubmit={this.submitLogin}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            placeholder="username"
            onChange={this.updateField}
            className="form-control"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.updateField}
            className="form-control"
          />
          <div className="modal-footer">
          <button type="submit" className="btn btn-dark" >
          Login
          </button>
          </div>
        </form>
        </div>
        </div>
        {this.state.message && this.state.message}
      </div>
    );
  }
}

 const mapStateToProps = state => {
  return {
    authed: state.authed,
  };
};

 export default connect(mapStateToProps, )(Login);