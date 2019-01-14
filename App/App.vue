<template>
  <div id="home">
    <h1>Cendyn Admin</h1>
    <MainNav></MainNav>
    <router-view></router-view>
  </div>
</template>

<script>
import MainNav from "./Components/MainNav/MainNav";

export default {
  name: "home",
  components: {
    MainNav
  }
};
</script>

<style>
</style>
