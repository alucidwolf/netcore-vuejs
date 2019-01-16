<template>
  <div class="col-sm-12">
    <h4>eProposal</h4>
    <b-tabs>
      <b-tab title="Templates" active>
        <br>Templates
      </b-tab>
      <b-tab title="Navigation">
        <br>Navigation
      </b-tab>
      <b-tab title="Domain">
        <br>Domain
      </b-tab>
      <b-tab title="Photo Tour">
        <br>Photo Tour
      </b-tab>
      <b-tab title="Header Images">
        <br>
        <ImageCropper></ImageCropper>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import ImageCropper from "../Cropper/Cropper";

export default {
  name: "eproposal",
  components: {
    ImageCropper
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../../Styles/variables.scss";
.tabs {
  .nav-tabs {
    border-bottom: 2px solid $brand-primary;
    .nav-item {
      margin-bottom: -2px;
    }
    .nav-link {
      border-radius: 0;
      &:hover,
      &:focus {
        color: $brand-primary;
        border-color: transparent;
      }
      &.active {
        color: $brand-primary;
        border-top: 2px solid $brand-primary;
        &:hover,
        &:focus {
          color: $brand-primary;
          border-color: $brand-primary #dee2e6 transparent #dee2e6;
        }
      }
    }
    li:first-child {
      margin-left: 15px;
    }
  }
}
</style>
