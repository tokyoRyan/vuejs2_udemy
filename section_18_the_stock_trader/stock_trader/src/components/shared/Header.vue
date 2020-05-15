<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Stock Trader</a>
    <button
      class="navbar-toggler"
      type="button"
      @click="toggleNav = !toggleNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="['navbar-collapse', { collapse: toggleNav }]">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stocks" class="nav-link">Stocks</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"
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
            <a class="dropdown-item" href="#">Save</a>
            <a class="dropdown-item" href="#">Load</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"
            ><strong>{{ `Funds: ${funds}` }}</strong></a
          >
        </li>
      </ul>
    </div>
    <div></div>
  </nav>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('stocks')
export default {
  data() {
    return {
      toggleNav: false,
    };
  },
  computed: {
    ...mapGetters(['funds'])
  }
};
</script>

<style scoped>

</style>
