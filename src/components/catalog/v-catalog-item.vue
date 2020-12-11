<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__img"
      :src="require('@/assets/images/' + product_data.image)"
      alt="img"
    />

    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }} $</p>
    <button class="v-catalog-item__add_to_cart_btn btn btn__add-to-cart" @click="addToCart">
      Add to cart
    </button>
  </div>
</template>
<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  _methods: {
    addToCart() {
      this.$emit("add-to-cart", this.product_data);
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
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 $vueLightGreen;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  border-radius: $radius;
  &__img {
    width: 150px;
    border-radius: $radius;
  }
}
</style>
