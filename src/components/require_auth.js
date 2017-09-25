import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      !this.props.authenticated ? this.props.history.push('/login') : null;
    }

    render() {
      return <ComposedComponent { ...this.props } />
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated
    }
  }

  return withRouter(connect(mapStateToProps)(Authentication));
}
