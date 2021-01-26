import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class ScrollToTop extends Component<RouteComponentProps, any> {
  componentDidUpdate(prevProps: RouteComponentProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
