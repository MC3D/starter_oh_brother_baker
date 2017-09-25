import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from './../actions/index';
import { withRouter } from 'react-router-dom';

class Login extends Component {

  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this._handleInput = this._handleInput.bind(this);
  }

  componentWillMount(){
    if(this.props.authenticated) {
      this.props.history.push('/recipes');
    }

    return
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    if(nextProps.authenticated) {
      this.props.history.push('/recipes');
    }

    return
  }

  _handleInput(event) {
    let obj = {};
    let key = event.target.name;
    obj[key] = event.target.value;
    this.setState(obj);
  }

  render() {
    return(
      <form className="col-md-6" onSubmit={(event) => { event.preventDefault(); this.props.login(this.state);} }>
      <div className="form-group">
        <label htmlFor="inputEmail">Email address</label>
        <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="username" onChange={ this._handleInput } />
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" onChange={ this._handleInput } />
      </div>
      <button type="submit" className="btn btn-default">Login</button>
    </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
