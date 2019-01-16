<template>
  <div>
    <SSOHeader></SSOHeader>
    <MainNav></MainNav>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainNav from "./Components/MainNav/MainNav";
import SSOHeader from "./Components/SSOHeader/SSOHeader";

export default {
  name: "app",
  components: {
    MainNav,
    SSOHeader
  }
};
</script>

<style lang="scss">
@import "./Styles/variables.scss";
a {
  color: $brand-smoke;
}
</style>
