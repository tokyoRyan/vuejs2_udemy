<template>
  <div id="app" class="container">
    <app-header></app-header>
    <div class="pt-3">
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('stocks')
import Header from './components/shared/Header'
export default {
  components: {
    'app-header': Header,
  },
  methods: {
    ...mapActions(['initStocks']),
  },
  created() {
    this.initStocks()
  },
}
</script>

<style scoped>
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
