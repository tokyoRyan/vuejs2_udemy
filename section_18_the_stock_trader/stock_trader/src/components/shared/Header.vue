<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Stock Trader</a>
      <button class="navbar-toggler" type="button"
        @click="toggleNav = !toggleNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div :class="['navbar-collapse', {'collapse': toggleNav}]">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
            <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/stocks" class="nav-link">Stocks</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">End Day</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"><strong>{{ `Funds: ` }}</strong></a>
          </li>
        </ul>

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggleNav: false,
    }
  }
}
</script>

<style scoped>

</style>
