import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';

import { payApi } from './utils/api';
import { Store } from './store/root';

@observer
class CheckOrderStatus extends Component<RouteComponentProps, any> {
  constructor(props: any) {
    super(props);

    this.checkOrder = this.checkOrder.bind(this);
  }
  checkOrder() {
    payApi
      .checkOrderStatus(window.localStorage['order_id'])
      .then(({ data }) => {
        if (data === 'PAID') {
          Store.cart.deleteAll();
        }
      })
      .catch((err) => console.log(err, 'check status'));
  }
  componentDidUpdate(prevProps: RouteComponentProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.checkOrder();
    }
  }

  componentDidMount() {
    this.checkOrder();
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(CheckOrderStatus);
