<template>
  <div id="home">
    <h1>Cendyn Admin</h1>
    <MainNav></MainNav>
    <router-view></router-view>
    <div class="container">
      <croppa v-model="myCroppa" :width="150" :height="150" :quality="1"></croppa>
      <button @click="dataUrl = myCroppa.generateDataUrl('image/jpeg', 0.8)">Output 20% Compressed</button>
    </div>
    <div class="container">
      <img :src="dataUrl">
    </div>
  </div>
</template>

<script>
import MainNav from "./Components/MainNav/MainNav";

export default {
  name: "home",
  components: {
    MainNav
  },
  data() {
    return { myCroppa: {}, dataUrl: "" };
  },
  methods: {
    uploadCroppedImage() {
      this.myCroppa.generateBlob(blob => {}, "image/jpeg", 0.8);
    }
  }
};
</script>

<style>
</style>
