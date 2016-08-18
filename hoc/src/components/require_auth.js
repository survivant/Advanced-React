import React, { Component }   from 'react';
import { connect }            from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    // Get access to parts of the context, the router in this case
    static contextTypes = {
      router: React.PropTypes.object
    };

    // This is the key here, return to the root if not authenticated
    componentWillMount() {
      if(!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    // Called when state changes
    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
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
