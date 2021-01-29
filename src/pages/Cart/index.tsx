import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { CartItem, Button } from '../../components';
import { useMst } from '../../store/root';
import numberWithCommas from '../../utils/numberWithCommas';

import './Cart.scss';

import coinImg from '../../assets/img/products/5gram.svg';
import goldImg from '../../assets/img/products/gold.jpg';

const CartPage: React.FC = observer(() => {
  const { cart } = useMst();

  return (
    <div className="cart">
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
                  deleteCurrent={() =>
                    cart.deleteProduct(
                      productEntry.product.id,
                      productEntry.quantity,
                    )
                  }
                />
              ))}
            <div className="cart__total">
              <div className="cart__total-title">Total</div>
              <div className="cart__total-cost text-gradient h1-md">
                ${numberWithCommas(cart.subTotal)}
              </div>
              <Button>PROCEED TO CHECKOUT</Button>
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
