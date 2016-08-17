import React            from 'react';

export default function(ComposedComponent) {
  class Authentication extends Component {
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return Authentication;
}

///////////////////////////////////////////////////////////////////////////
// Use of this HOC:

// import Authentication    from '...';
// import ComponentToWrap   from '...';

// const ComposedComponent = Authentication(ComponentToWrap);

// <ComposedComponent />
