<template>
  <div class="catalog">
    <div class="catalog__header">
      <p>Amazing</p>
      <img alt="Vue logo" src="../assets/logo.png" />
      <p>Store</p>
    </div>
    <vCatalog />
  </div>
</template>

<script>
// @ is an alias to /src
import vCatalog from "@/components/catalog/v-catalog.vue";

export default {
  name: "Catalog",
  components: {
    vCatalog
  }
};
</script>

<style lang="scss">
.catalog__header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  font-weight: 900;
}
</style>
