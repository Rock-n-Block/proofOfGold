import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';

import { CartItem, Button } from '../../components';
import { useMst } from '../../store/root';
import numberWithCommas from '../../utils/numberWithCommas';

import './Cart.scss';

const CartPage: React.FC = observer(() => {
  const history = useHistory();
  const { cart, user } = useMst();
  const [isShowHelp, setShowHelp] = React.useState(false);

  const onRedirect = () => {
    if (user.isLogin) {
      history.push('/checkout');
    } else {
      setShowHelp(true);
      setTimeout(() => {
        history.push('/checkout');
      }, 3000);
    }
  };

  React.useEffect(() => {
    cart.items.map((item) => {
      if (item.product.supply <= 0) {
        cart.remove(item.product.id);
      }
    });
  }, [cart]);

  return (
    <div
      className={classNames('cart', {
        'box-fullpage': !cart.items.length,
      })}>
      <div className="row">
        {cart.items.length ? (
          <>
            <h1 className="cart__title h1-md text-gradient">Cart</h1>
            {cart.items.length &&
              cart.items.map((productEntry, index) => (
                <CartItem
                  key={productEntry.product.id}
                  isFirst={index === 0}
                  {...productEntry.product}
                  quantity={productEntry.quantity}
                  totalPrise={productEntry.price}
                  addMore={() => cart.addProduct(productEntry.product.id)}
                  deleteOneOf={() =>
                    cart.deleteProduct(productEntry.product.id)
                  }
                  deleteCurrent={() => cart.remove(productEntry.product.id)}
                />
              ))}
            <div className="cart__total">
              <div className="cart__total-title">Total</div>
              <div className="cart__total-cost text-gradient h1-md">
                ${numberWithCommas(cart.subTotal)}
              </div>
              <Button onClick={onRedirect}>PROCEED TO CHECKOUT</Button>
              {isShowHelp && (
                <div className="cart__info text-md">
                  You will redirect to login page
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="cart__empty">
            <h1 className="cart__empty-title text-gradient">
              YOUR CART IS CURRENTLY EMPTY.
            </h1>
            <Link to="/shop">
              <Button>RETURN TO SHOP</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
});

export default CartPage;
