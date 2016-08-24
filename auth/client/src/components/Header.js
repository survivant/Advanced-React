import React, { Component }         from 'react';
import { connect }                  from 'react-redux'
import { Link }                     from 'react-router';

class Header extends Component {
  renderInOutLinks() {
    if(this.props.logged_in) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Log out</Link>
        </li>
      );
    }
    else {
      return [(
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/login">Log in</Link>
        </li>
      ),
      (
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign up</Link>
        </li>
      )
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <Link to="/" className="navbar-brand">Authentication</Link>
        <ul className="nav navbar-nav">
          {this.renderInOutLinks()}
        </ul>
      </nav>
    );
  }
};

function mapStateToProps(state) {
  return { logged_in: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
