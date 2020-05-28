<template>
  <div>
    <h3>Portfolio</h3>
    <div class="row">
      <app-portfolio-stock
        v-for="stock in stockPortfolio"
        v-bind:key="stock.id"
        :stock="stock"
      ></app-portfolio-stock>
    </div>
  </div>
</template>

<script>
import Stock from '../components/portfolio/Stock'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('portfolio')

export default {
  data() {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters(['stockPortfolio']),
  },
  components: {
    'app-portfolio-stock': Stock,
  },
}
</script>

<style scoped></style>
