<template>
  <div class="col-sm-12">
    <h4>Home</h4>
    <div class="col">
      <b-nav vertical class="w-25">
        <NavItems></NavItems>
      </b-nav>
    </div>
  </div>
</template>

<script>
import NavItems from "../MainNav/NavItems.vue";
export default {
  name: "homepage",
  components: {
    NavItems
  }
};
</script>

<style>
</style>
