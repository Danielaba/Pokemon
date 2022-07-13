<template>
  <div id="app" class="app">
    <NavBarVue />
    <router-view/>
  </div>
</template>

<script>
import NavBarVue from './components/NavBar.vue'

export default {
  components: {
    NavBarVue,
  }
}
</script>

<style>
.app{
  background-image: url(./assets/fondo.png);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
