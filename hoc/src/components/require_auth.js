import React, { Component }   from 'react';
import { connect }            from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    };
    
    render() {
      console.log(this.context);
//      console.log('Authenticated:', this.props.authenticated);

      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}


///////////////////////////////////////////////////////////////////////////
// Use of this HOC:

// import Authentication    from '...';
// import ComponentToWrap   from '...';

// const ComposedComponent = Authentication(ComponentToWrap);

// <ComposedComponent />
///////////////////////////////////////////////////////////////////////////
