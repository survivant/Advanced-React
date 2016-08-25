import React, { Component }    from 'react';
import { connect }             from 'react-redux';

import * as actions            from '../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
        <h2 className="text-sm-center">Feature</h2>
        <p>This is the long-awaited protected feature</p>

        <p>The server says: <pre>{this.props.message}</pre></p>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return { message: state.message };
}

export default connect(mapStateToProps, actions)(Feature);
