import { types, flow, Instance } from 'mobx-state-tree';
import { storeApi } from '../utils/api';

export type IProduct = Instance<typeof Product>;

const Review = types.model({
  // id: types.identifierNumber,
  rate: types.number,
  body: types.string,
  name: types.string,
  email: types.string,
  created_at: types.string,
});

export const Product = types.model({
  id: types.identifier,
  group: types.string,
  name: types.string,
  image: types.string,
  total_supply: types.number,
  supply: types.number,
  sold: types.number,
  price: types.number,
  description: types.maybe(types.string),
  reviews: types.maybe(types.array(Review)),
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
      return self.products.find((product) => product.id === id);
    },
  }))
  .actions((self) => {
    function updateProducts(products: any) {
      self.products = products;
    }
    function updateProduct(product: any) {
      let entryProduct = self.products.find((entry) => entry.id == product.id);

      if (entryProduct) {
        entryProduct.group = '';
        entryProduct.name = product.name;
        entryProduct.image = product.image;
        entryProduct.total_supply = product.total_supply;
        entryProduct.supply = product.supply;
        entryProduct.sold = product.sold;
        entryProduct.price = product.price;
        entryProduct.description = product.description;
        entryProduct.reviews = product.reviews;
      }
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

    return { loadProducts, loadProduct, updateProducts, updateProduct };
  });
