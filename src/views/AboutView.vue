<template>
  <div class="about">
    <BackgroundImage />
    <div class="content">
      <div class="wrapper">
        <section>
          <h1>About To-Do App</h1>
          <p>
            The app allows you to add, delete and edit tasks you have to do in
            your everyday life.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundImage from "../components/BackgroundImage.vue";

export default {
  name: "HomeView",
  components: {
    BackgroundImage,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
}
.content {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
}
.content .wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 50%;
}
section {
  display: flex;
  flex-direction: column;
  width: 35%;
  color: #efefef;
  text-align: right;
}
</style>
