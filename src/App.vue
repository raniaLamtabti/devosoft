<template>
  <div id="app">
    <NavbarComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
@import './assets/sass/_main.scss';
body {
  margin: 0;
}
#app {
  background: $color-dark-gradient;
  padding: 0;
}
</style>
