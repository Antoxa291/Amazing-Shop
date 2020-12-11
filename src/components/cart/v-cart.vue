<template>
  <div class="v-cart">
    <router-link :to="{ name: 'Catalog' }">
      <div class="v-cart__link-to-catalog">Back to Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!this.CART.length">There are no products in the cart...</p>
    <vCartItem
      :cart_data="CART"
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @delete-from-cart="deleteFromCart(index)"
      @decrease-quantity="decreaseQuantity(index)"
      @increase-quantity="increaseQuantity(index)"
    />
    <div v-if="this.CART.length" class="v-cart__total">
      <p class="total__title">Total cart price:</p>
      <p class="total__price">{{ cartTotal }} $</p>
    </div>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART"]),

    cartTotal() {
      return this.CART.reduce(
        (res, item) => res + item.price * item.quantity,
        0
      );
    }
  },
  _methods: {
    ...mapActions([
      "DEL_FROM_CART",
      "DECREASE_CART_ITEM_QUANTITY",
      "INCREASE_CART_ITEM_QUANTITY"
    ]),

    deleteFromCart(index) {
      this.DEL_FROM_CART(index);
    },
    decreaseQuantity(index) {
      this.DECREASE_CART_ITEM_QUANTITY(index);
    },
    increaseQuantity(index) {
      this.INCREASE_CART_ITEM_QUANTITY(index);
    }
  },
  get methods() {
    return this._methods;
  },
  set methods(value) {
    this._methods = value;
  }
};
</script>
<style lang="scss">
.v-cart {
  margin-bottom: 100px;
  border-radius: $radius;
  &__link-to-catalog {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    box-shadow: 0 0 8px 0 $vueDarkGreen;
    border-radius: 50%;
    &:hover {
      background: $vueDarkGreen;
      color: $vueLightGreen;
      box-shadow: 0 0 8px 0 $vueLightGreen;
    }
  }
  &__total {
    display: flex;
    justify-content: center;
    padding: $padding * 2;
    background: $vueDarkGreen;
    color: $vueLightGreen;
    font-optical-sizing: 30px;
    box-shadow: 0 0 8px 0 $vueLightGreen;
    border-radius: $radius;
  }
  .total__title {
    margin-right: $margin * 2;
  }
}
</style>
