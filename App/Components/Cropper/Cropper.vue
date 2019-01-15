<template>
  <div>
    <div class="col-sm-12">
      <h2>Image Cropping Tool</h2>
      <hr>
    </div>
    <div class="col-sm-12">
      <h3>Controls</h3>
      <hr>
      <div class="row">
        <div class="col-sm-2">
          <h4>Zoom Slider</h4>
          <div class="form-group">
            <input
              class="my-cropper-slider-input"
              v-model="sliderVal"
              type="range"
              @input="onSliderChange"
              :min="sliderMin"
              :max="sliderMax"
              step=".001"
            >
            {{sliderVal}}
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group">
            <label for="Width">Width</label>
            <input v-model.lazy.number="croppaWidth" type="number" class="form-control">
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group">
            <label for="Height">Height</label>
            <input v-model.lazy.number="croppaHeight" type="number" class="form-control">
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group">
            <h4>Output</h4>
            <button @click="dataUrl = myCroppa.generateDataUrl('image/jpeg', 0.8)">Output Image</button>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group">
            <h4>Remove</h4>
            <button @click="resetCroppaImage">Remove Image</button>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="form-group">
            <h4>Upload</h4>
            <button @click="upload">Upload Image</button>
          </div>
        </div>
        <div class="col-sm-6">
          <h4>Preview</h4>
          <mycropper
            v-model="myCroppa"
            :width="croppaWidth"
            :height="croppaHeight"
            :quality="1"
            :prevent-white-space="true"
            :zoom-speed="10"
            :show-remove-button="false"
            :file-size-limit="10485760"
            :placeholder="'Click or drag/drop'"
            :placeholder-font-size="14"
            :show-loading="true"
            @file-type-mismatch="onFileTypeMismatch"
            @file-size-exceed="onFileSizeExceed"
            @zoom="onZoom"
            @new-image-drawn="onNewImage"
            accept=".jpg, .png"
            inital-size="natural"
            initial-size="cover"
          ></mycropper>
        </div>
        <div class="col-sm-6">
          <h4>Image Output base:64</h4>
          <img :src="dataUrl">
        </div>
        <div class="col-sm-12">
          <h4>Uploaded Images</h4>
          <div class="row">
            <div v-for="(img, index) in dataUrlUploads" class="col-sm-4">
              <b-img fluid-grow :src="img"/>
              <button @click="deleteImage(index)">Remove</button>
            </div>
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
      dataUrlUploads: [],
      croppaWidth: 500,
      croppaHeight: 375,
      sliderVal: 0,
      sliderMin: 0,
      sliderMax: 0
    };
  },
  methods: {
    uploadCroppedImage() {
      this.myCroppa.generateBlob(blob => {}, "image/jpeg", 0.8);
    },
    onFileTypeMismatch(file) {
      alert("Invalid file type. Please upload jpeg or png.");
    },
    onFileSizeExceed(file) {
      alert("File size excees 10Mb. Please choose a smaller file.");
    },
    resetCroppaImage() {
      this.myCroppa.remove();
      this.dataUrl = "";
    },
    onSliderChange(evt) {
      var increment = evt.target.value;
      this.myCroppa.scaleRatio = +increment;
    },
    onNewImage() {
      this.sliderVal = this.myCroppa.scaleRatio;
      this.sliderMin = this.myCroppa.scaleRatio / 2;
      this.sliderMax = this.myCroppa.scaleRatio * 2;
    },
    onZoom() {
      if (this.sliderMax && this.myCroppa.scaleRatio >= this.sliderMax) {
        this.myCroppa.scaleRatio = this.sliderMax;
      } else if (this.sliderMin && this.myCroppa.scaleRatio <= this.sliderMin) {
        this.myCroppa.scaleRatio = this.sliderMin;
      }

      this.sliderVal = this.myCroppa.scaleRatio;
    },
    upload() {
      if (!this.myCroppa.hasImage()) {
        alert("no image to upload");
        return;
      }

      // PUSH image onto array to display in UI
      var filename = this.myCroppa.generateDataUrl("image/jpeg", 0.8);
      this.dataUrlUploads.push(filename);

      // POST image to DB here
      this.myCroppa.generateBlob(
        blob => {
          /////////////////////////
        },
        "image/jpeg",
        0.8
      );
      this.myCroppa.remove();
    },
    deleteImage(index) {
      this.dataUrlUploads.splice(index, 1);

      // REMOVE image from DB
    }
  }
};
</script>

<style>
.my-cropper-slider-input {
  width: 100%;
}
</style>
