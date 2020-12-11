import { createStore } from "vuex";
// разделение на подфайлы по vue-best-practise
import mutations from "./mutations";
import mainActions from "./actions";
import apiRequests from "./actions/api_requests";
import getters from "./getters";

//слияние экшенов
const actions = { ...mainActions, ...apiRequests };

export default createStore({
  state: {
    products: [],
    cart: []
  },
  mutations,
  actions,
  getters,
  modules: {}
});
