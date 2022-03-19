<template>
  <div class="background">
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  name: "BackgroundImage",
};
</script>

<style lang="scss" scoped>
.background {
  background-image: url("../assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -10px 60%;
  background-color: #445c62;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
  z-index: -1;
}
.overlay {
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 2;
  top: 0;
  background-image: linear-gradient(to right, #00000000, #000000c5);
}
</style>
