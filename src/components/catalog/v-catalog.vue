<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'Cart', params: { CART } }">
      <div class="v-catalog__link-to-cart">Cart: {{ CART.length }}</div>
    </router-link>
    <div class="v-catalog__filters">
      <v-select
        :selected="selected"
        :options="categories"
        @selected-option="sortByCategories"
      />
      <div class="range-slider">
        <input
          type="rage"
          min="0"
          max="150"
          step="5"
          v-model.number="minPrice"
          @change="setRangeSliders"
        />
        <input
          type="rage"
          min="0"
          max="150"
          step="5"
          v-model.number="maxPrice"
          @change="setRangeSliders"
        />
      </div>
      <div class="range-values">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>

    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in filteredProducts"
        :key="product.article"
        :product_data="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import vCatalogItem from "./v-catalog-item";
import vSelect from "./v-select";

export default {
  name: "v-catalog",
  components: { vCatalogItem, vSelect },
  props: {},
  data() {
    return {
      categories: [
        { name: "All", value: "all" },
        { name: "T-shirts", value: "t-shirt" },
        { name: "Jeans", value: "jeans" },
        { name: "Sneakers", value: "sneakers" }
      ],
      selected: "All",
      sortedProducts: [],
      minPrice: 0,

      maxPrice: 150
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    }
  },
  _methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),

    sortByCategories(category) {
      this.sortedProducts = [...this.PRODUCTS];
      this.selected = category.name;
      this.sortedProducts = this.sortedProducts.filter(item => {
        return item.price >= this.minPrice && item.price <= this.maxPrice;
      });
      if (category && category.value != "all") {
        this.sortedProducts = this.sortedProducts.filter(el => {
          return el.category === category.value;
        });
      }
    },

    addToCart(data) {
      this.ADD_TO_CART(data);
    },

    optionSelect(option) {
      this.selected = option.name;
    },

    setRangeSliders() {
      if (this.minPrice > this.maxPrice) {
        let temp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = temp;
        this.sortByCategories();
      }
    }

    // filterByRange() {
    //   this.sortedProducts = this.sortedProducts.filter(item => {
    //     return item.price >= this.minPrice && item.price <= this.maxPrice;
    //   });
    // }
  },
  get methods() {
    return this._methods;
  },
  set methods(value) {
    this._methods = value;
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(response => {
      if (response.data) {
        console.log("Data downloaded!");
        this.sortByCategories();
      }
    });
  }
};
</script>
<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border-radius: $radius;
  }
  &__link-to-cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    border-radius: 50%;
    box-shadow: 0 0 8px 0 $vueDarkGreen;
    font-size: 700;
    &:hover {
      background: $vueDarkGreen;
      color: $vueLightGreen;
      box-shadow: 0 0 8px 0 $vueLightGreen;
    }
  }
  &__filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.range-slider input[type="range"] {
  position: absolute;
  left: 65%;
  top: 180px;
}
::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
input[type="range"] {
  -webkit-appearance: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 300px;
  height: 5px;
  background: #ddd;
  border: none;
  border-radius: 3px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1.5px solid #c1c1c1;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #ededed;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  box-shadow: 1px 1px 1px #c6c6c6, 0px 0px 1px #787878;
  border-radius: 2px;
  border: 0.2px solid #787878;
}
</style>
