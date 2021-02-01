import { types, flow, Instance } from 'mobx-state-tree';
import { storeApi } from '../utils/api';

export type IProduct = Instance<typeof Product>;

export const Product = types.model({
  id: types.identifier,
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
    getProduct(id: string) {
      return self.products.filter((product) => product.id === id);
    },
  }))
  .actions((self) => {
    function updateProducts(products: any) {
      self.products = products;
    }
    function updateProduct(product: any) {
      let entryProduct = self.products.find((entry) => entry === product.id);

      entryProduct = product;
    }
    const loadProducts = flow(function* loadProducts() {
      try {
        const { data } = yield storeApi.getProducts();

        data.items = data.items.map((item: any) => ({
          ...item,
          id: item.id + '',
        }));
        updateProducts(data.items);
      } catch (err) {
        console.log(err, 'load products');
      }
    });

    const loadProduct = flow(function* getProduct(id) {
      try {
        const { data } = yield storeApi.getProduct(id);

        updateProduct(data);

        return data;
      } catch (err) {
        console.log(err, 'load product');
      }
    });

    return { loadProducts, loadProduct };
  });
