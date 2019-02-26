import React from 'react';
import { connect } from 'react-redux';

 export default AuthComp => {
  class Authorization extends React.Component {
    componentWillMount() {
      if (!this.props.authed) {
        this.props.history.push('/login');
      }
    }

     render() {
      return (
        <div>
          {this.props.authed ? (
            <AuthComp />
          ) : this.props.history.push('/login')}
        </div>
      );
    }
  }

   const mapStateToProps = state => {
    return {
      authed: state.authed,
    };
  };

   return connect(mapStateToProps)(Authorization);
};