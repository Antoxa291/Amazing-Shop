export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  },
  SET_CART: (state, product) => {
    if (state.cart.length) {
      let isProductExists = false;
      state.cart.map(item => {
        if (item.article === product.article) {
          isProductExists = true;
          item.quantity++;
        }
      });
      if (!isProductExists) {
        state.cart.push(product);
      }
    } else {
      state.cart.push(product);
    }
  },
  DEL_CART_ITEM: (state, index) => {
    state.cart[index].quantity = 1;
    state.cart.splice(index, 1);
  },
  INCREASE_QUANTITY: (state, index) => {
    state.cart[index].quantity++;
  },
  DECREASE_QUANTITY: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  }
};
