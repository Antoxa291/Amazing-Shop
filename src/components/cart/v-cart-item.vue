<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__img"
      :src="require('@/assets/images/' + cart_item_data.image)"
      alt="img"
    />

    <div class="v-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>Price: {{ cart_item_data.price }} $</p>
    </div>
    <p>Quantity:</p>
    <div class="v-cart-item__quantity">
      <div class="quantity">
        <button
          class="v-cart-item__low_quantity btn btn__quantity"
          @click="decreaseQuantity"
        >
          -
        </button>
        <p>{{ cart_item_data.quantity }}</p>
        <button
          class="v-cart-item__rise_quantity btn btn__quantity"
          @click="increaseQuantity"
        >
          +
        </button>
      </div>
      <p>
        Total item price: {{ cart_item_data.price * cart_item_data.quantity }} $
      </p>
    </div>
    <button
      class="v-cart-item__delete_from_cart_btn btn btn__delete"
      @click="deleteFromCart"
    >
      Delete
    </button>
  </div>
</template>
<script>
export default {
  name: "v-cart-item",
  emits: {
    "delete-from-cart": null,
    "decrease-quantity": null,
    "increase-quantity": null
  },
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteFromCart() {
      this.$emit("delete-from-cart", {});
    },
    decreaseQuantity() {
      this.$emit("decrease-quantity", {});
    },
    increaseQuantity() {
      this.$emit("increase-quantity", {});
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__img {
    max-width: 80px;
  }
  &__quantity {
    align-items: center;
  }
}

.quantity {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
</style>
