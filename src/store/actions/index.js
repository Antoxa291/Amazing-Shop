export default {
  ADD_TO_CART({ commit }, product) {
    commit("SET_CART", product);
  },
  DEL_FROM_CART({ commit }, index) {
    commit("DEL_CART_ITEM", index);
  },
  INCREASE_CART_ITEM_QUANTITY({ commit }, index) {
    commit("INCREASE_QUANTITY", index);
  },
  DECREASE_CART_ITEM_QUANTITY({ commit }, index) {
    commit("DECREASE_QUANTITY", index);
  }
};
