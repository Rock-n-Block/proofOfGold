import { types, flow } from 'mobx-state-tree';
import { storeApi } from '../utils/api';

export const Product = types.model({
  id: types.number,
  group: types.string,
  name: types.string,
  image: types.string,
  total_supply: types.number,
  supply: types.number,
  sold: types.number,
  price: types.number,
});

export const ProductsStore = types
  .model({
    products: types.optional(types.array(Product), []),
  })
  .views((self) => ({
    get getCoins() {
      return self.products.filter((product) => product.group === 'gold_coins');
    },
    get getBars() {
      return self.products.filter((product) => product.group === 'gold_bars');
    },
    get getProducts() {
      return self.products;
    },
  }))
  .actions((self) => {
    function updateProducts(products: any) {
      self.products = products;
    }
    const loadProducts = flow(function* loadProducts() {
      try {
        const { data } = yield storeApi.getProducts();
        updateProducts(data.items);
      } catch (err) {
        console.log(err, 'loadProducts');
      }
    });

    return { loadProducts };
  });
