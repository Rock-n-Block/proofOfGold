import { types, getParent, destroy } from 'mobx-state-tree';

import { Product, ProductsStore } from './Product';

const CartEntry = types
  .model({
    product: types.reference(Product),
    quantity: types.number,
  })
  .views((self) => ({
    get price() {
      return self.product.price * self.quantity;
    },
  }))
  .actions((self) => ({
    increaseQuantity(number: number) {
      self.quantity += number;
    },
    decreaseQuantity(number: number) {
      self.quantity -= number;
    },
    setQuantity(number: number) {
      self.quantity = number;
    },
    remove() {
      // getParent(self, 2).remove(self)
      console.log(getParent(self, 2));
    },
  }));

export const CartStore = types
  .model({
    items: types.optional(types.array(CartEntry), []),
  })
  .views((self) => ({
    get subTotal() {
      return self.items.reduce((sum, e) => sum + e.price, 0);
    },
    get subQuantity() {
      return self.items.reduce((sum, e) => sum + e.quantity, 0);
    },
  }))
  .actions((self) => {
    const remove = (product: any) => {
      destroy(product);
    };

    const updateCart = (data: any) => {
      self.items = data.items;
    };

    const addProduct = (product: string, quantity = 1) => {
      const parent: any = getParent(self);
      const entry = self.items.find((entry) => entry.product.id === product);
      const productObj = parent.productsStore.products.find(
        (element: any) => element.id === product,
      );
      if (!entry && productObj.total_supply >= quantity) {
        self.items.push({
          product: product,
          quantity,
        });
      } else if (
        entry &&
        productObj.total_supply >= entry.quantity + quantity
      ) {
        entry.increaseQuantity(quantity);
      }
    };

    const deleteProduct = (product: string, quantity = 1) => {
      const entry = self.items.find((entry) => entry.product.id === product);
      if (entry) {
        if (entry.quantity - quantity > 0) {
          entry.decreaseQuantity(1);
        } else {
          remove(entry);
        }
      }
    };

    const setProductQuantity = (product: string, quantity: number) => {
      const entry = self.items.find((entry) => entry.product.id === product);
      if (entry) {
        entry.setQuantity(quantity);
      }
    };

    return {
      addProduct,
      deleteProduct,
      remove,
      updateCart,
      setProductQuantity,
    };
  });
