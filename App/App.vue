<template>
  <div id="home">
    <SSOHeader></SSOHeader>
    <MainNav></MainNav>
    <router-view></router-view>
  </div>
</template>

<script>
import MainNav from "./Components/MainNav/MainNav";
import SSOHeader from "./Components/SSOHeader/SSOHeader";

export default {
  name: "home",
  components: {
    MainNav,
    SSOHeader
  }
};
</script>

<style>
</style>
