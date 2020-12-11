<template>
  <div class="v-popup">
    <div class="v-popup__header">
      <span>{{ popupName }}</span>
      <i class="v-popup__close_icon material-icons" @click="closePopup"
        >close</i
      >
    </div>
    <div class="v-popup__content">
      <slot></slot>
    </div>
    <div class="v-popup__footer">
      <button class="v-popup__close_btn " @click="closePopup">Close</button>
      <button class="v-popup__submit_btn" @click="submitPopup">
        Add to cart
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-popup",
  data() {
    return {
      isInfoPopupVisible: false,
    };
  },
  props: {
    popupName: {
      type: String,
      default: "Product name",
    },
  },

  methods: {
    closePopup() {
      this.$emit("close-popup");
    },
    submitPopup() {
      this.$emit("submit-popup");
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.v-popup {
  padding: 16px;
  position: fixed;
  top: 2em;
  left: 2em;
  background: #ffffff;
  width: 400px;

  box-shadow: 0 0 8px 0 #2c3e50;
  &__close_icon {
    margin: 0;
    padding: 0;
    color: #ff1a2c;
    box-sizing: initial;
    &:hover {
      cursor: pointer;

      text-shadow: #2c3e50;
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__submit_btn,
  &__close_btn {
    padding: 8px 16px;

    border: 0;
    border-radius: 8px;
    box-shadow: 0 0 8px 0 #2c3e50;
    background: #42b983;
    font-weight: 700;
    color: $white;

    &:hover {
      cursor: pointer;
      box-shadow: 0 0 8px 0 #42b983;
    }

    &:focus,
    &:active {
      outline: none;
    }
  }
  &__close_btn {
    background: #ff1a2c;
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 8px 0 #ff1a2c;
    }
  }
}
</style>
