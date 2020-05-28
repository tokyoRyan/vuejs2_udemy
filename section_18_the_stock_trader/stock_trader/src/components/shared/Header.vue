<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button
      class="navbar-toggler"
      type="button"
      @click="toggleNav = !toggleNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="['navbar-collapse', { collapse: toggleNav }]">
      <ul class="navbar-nav mr-auto">
        <router-link
          tag="li"
          to="/portfolio"
          class="nav-item"
          active-class="active"
        >
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link
          tag="li"
          to="/stocks"
          class="nav-item"
          active-class="active"
        >
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            @click="endDay"
            >End Day</a
          >
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click="saveData">Save</a>
            <a class="dropdown-item" href="#" @click="loadData">Load</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"
            ><strong>Funds {{ funds | currency }}</strong></a
          >
        </li>
      </ul>
    </div>
    <div></div>
  </nav>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('portfolio')
const { mapActions } = createNamespacedHelpers('stocks')
export default {
  data() {
    return {
      toggleNav: false,
    }
  },
  computed: {
    ...mapGetters(['funds']),
  },
  methods: {
    ...mapActions(['randomizeStocks']),
    endDay() {
      this.randomizeStocks()
    },
    loadData() {
      console.log('inside of loadData')
    },
    saveData() {
      console.log('inside of saveData')
    },
  },
}
</script>

<style scoped></style>
