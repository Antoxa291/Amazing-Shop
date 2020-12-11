<template>
  <div class="v-catalog-item">
    <v-popup
      v-if="isInfoPopupVisible"
      @close-popup="closePopup"
      @submit-popup="addToCart"
      :popupName="product_data.name"
      :rightBtnName="rightBtnName"
      ><img
        class="v-catalog-item__img"
        :src="require('@/assets/images/' + product_data.image)"
        alt="img"
      />
      <p class="v-catalog-item__name">{{ product_data.name }}</p>
      <p class="v-catalog-item__category">
        Category: {{ product_data.category }}
      </p>
      <p class="v-catalog-item__price">Price: {{ product_data.price }} $</p>
      <p class="v-catalog-item__name">
        About product:
      </p>
      <p class="v-catalog-item__info">
        {{ product_data.info }}
      </p></v-popup
    >
    <img
      class="v-catalog-item__img"
      :src="require('@/assets/images/' + product_data.image)"
      alt="img"
    />
    <button
      class="v-catalog-item__show_info_btn btn btn__info"
      @click="showPopupInfo"
    >
      <span class="material-icons">
        info
      </span>
    </button>
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }} $</p>

    <button
      class="v-catalog-item__add_to_cart_btn btn btn__add_to_cart"
      @click="addToCart"
    >
      {{ rightBtnName }}
    </button>
  </div>
</template>
<script>
import vPopup from "@/components/popup/v-popup";

export default {
  name: "v-catalog-item",
  components: {
    vPopup,
  },
  data() {
    return {
      isInfoPopupVisible: false,
      rightBtnName: "Add to cart",
    };
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  _methods: {
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closePopup() {
      this.isInfoPopupVisible = false;
    },
    addToCart() {
      this.$emit("add-to-cart", this.product_data);
      this.closePopup();
    },
  },
  get methods() {
    return this._methods;
  },
  set methods(value) {
    this._methods = value;
  },
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
  &__name {
    font-weight: 700;
  }
}
</style>
