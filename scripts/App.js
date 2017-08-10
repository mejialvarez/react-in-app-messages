import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import _dp from '_dp';

export default class App extends Component {
  componentWillMount() {
    const { history } = this.props;
    this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
    this.handleLocationChange(history.location);
  }

  componentWillUnmount() {
    if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
  }

  handleLocationChange = (location) => {
    _dp('pageView')
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="page1">Pagina 1</Link>
          <Link to="page2">Pagina 2</Link>
        </nav>

        { this.props.children }
      </div>
    )
  }
}
