<template>
  <div>
    <h3>Stocks</h3>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-xs-12">
        <app-buy-stock-item :name="'BMW'" :price="110"></app-buy-stock-item>
      </div>
      <div class="col-lg-6 col-md-6 col-xs-12">
        <app-buy-stock-item :name="'Google'" :price="200"></app-buy-stock-item>
      </div>
      <div class="col-lg-6 col-md-6 col-xs-12">
        <app-buy-stock-item :name="'Apple'" :price="250"></app-buy-stock-item>
      </div>
      <div class="col-lg-6 col-md-6 col-xs-12">
        <app-buy-stock-item :name="'Twitter'" :price="8"></app-buy-stock-item>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import BuyStockItem from "../components/stocks/BuyStockItem";
const { mapActions } = createNamespacedHelpers("stocks");
export default {
  methods: {
    ...mapActions(["initStore"]),
  },
  mounted() {
    this.initStore();
  },
  components: {
    "app-buy-stock-item": BuyStockItem,
  },
};
</script>

<style scoped></style>
