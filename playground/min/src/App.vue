<template>
  <div id="app">
    <app-play-pause-player ></app-play-pause-player>
    <but
  </div>
</template>

<script>

import PlayPausePlayer from "./components/PlayPausePlayer";

export default {
  methods: {
    goTo90s(){
      return 90;
    }
  },
  components: {
    'app-play-pause-player' : PlayPausePlayer
  }
}
</script>

<style>
</style>
