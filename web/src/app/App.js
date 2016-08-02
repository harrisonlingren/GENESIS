import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../common/actions/actionCreator';

function mapStateToProps(state) {
  return {
    personalites: state.personalities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  render() {
    return (
      <div>
        <h2>App Container</h2>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
