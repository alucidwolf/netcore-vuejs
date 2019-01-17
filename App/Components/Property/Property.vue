<template>
  <div class="col-sm-12">
    <h4>Property</h4>
    <div v-if="!currentProperty">
      <p>Please select a property</p>
    </div>
    <div v-else>
      <label for="CurrentProperty">Current Property</label>
      {{currentProperty}}
    </div>
  </div>
</template>

<script>
export default {
  name: "property",
  data() {
    return {};
  },
  computed: {
    currentProperty() {
      let currProp = this.$store.getters.getCurrentPropertySelected;
      if (currProp === "") {
        return false;
      } else {
        return currProp;
      }
    }
  }
};
</script>

<style>
</style>
