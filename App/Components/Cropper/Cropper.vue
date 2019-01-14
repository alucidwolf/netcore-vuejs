<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <h2>Croppa</h2>
        <mycropper
          v-model="myCroppa"
          :width="croppaWidth"
          :height="croppaHeight"
          :quality="1"
          :prevent-white-space="true"
          :zoom-speed="10"
          :show-remove-button="false"
          :file-size-limit="1048576"
          @file-type-mismatch="onFileTypeMismatch"
          @file-size-exceed="onFileSizeExceed"
          accept="image/jpeg"
          inital-size="natural"
          initial-size="cover"
        ></mycropper>
      </div>
      <div class="col-sm-12">
        <h3>Controls</h3>
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <button @click="resetCroppaImage">Reset Image</button>
            </div>
            <div class="form-group">
              <label for="Width">Width</label>
              <input v-model.lazy.number="croppaWidth" type="number" class="form-control">
            </div>
            <div class="form-group">
              <label for="Height">Height</label>
              <input v-model.lazy.number="croppaHeight" type="number" class="form-control">
            </div>
          </div>
          <div class="col-sm-6">
            <h3>Output</h3>
            <button
              @click="dataUrl = myCroppa.generateDataUrl('image/jpeg', 0.8)"
            >Output 20% Compressed</button>
            <img :src="dataUrl">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Croppa from "vue-croppa";

Vue.component("mycropper", Croppa.component);

export default {
  name: "Cropper",
  data() {
    return {
      myCroppa: {},
      dataUrl: "",
      croppaWidth: 200,
      croppaHeight: 200
    };
  },
  methods: {
    uploadCroppedImage() {
      this.myCroppa.generateBlob(blob => {}, "image/jpeg", 0.8);
    },
    onFileTypeMismatch(file) {
      alert("Invalid file type. Please upload jpeg.");
    },
    onFileSizeExceed(file) {
      alert("File size excees 1Mb. Please choose a smaller file.");
    },
    resetCroppaImage() {
      this.myCroppa.remove();
    }
  }
};
</script>

<style>
</style>
