<template>
  <div class="container-fluid">
    <div class="col-sm-12">
      <h4>eProposal</h4>
      <b-tabs>
        <b-tab title="first">
          <br>I'm the first fading tab
        </b-tab>
        <b-tab title="second">
          <br>I'm the second tab content
        </b-tab>
        <b-tab title="Header Images" active>
          <br>
          <ImageCropper></ImageCropper>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import ImageCropper from "../Cropper/Cropper";

export default {
  name: "eproposal",
  components: {
    ImageCropper
  }
};
</script>

<style lang="scss">
.tabs {
  .nav-tabs {
    li:first-child {
      margin-left: 15px;
    }
  }
}
</style>
