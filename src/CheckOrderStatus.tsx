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
          this.props.history.push('/account/orders');
          Store.cart.deleteAll();
          delete window.localStorage['order_id'];
        } else if (data === 'EXPIRED') {
          delete window.localStorage['order_id'];
        }
      })
      .catch((err) => console.log(err, 'check status'));
  }
  componentDidUpdate(prevProps: RouteComponentProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname &&
      window.localStorage['order_id']
    ) {
      this.checkOrder();
    }
  }

  componentDidMount() {
    if (window.localStorage['order_id']) {
      this.checkOrder();
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(CheckOrderStatus);
