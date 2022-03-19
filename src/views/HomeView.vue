<template>
  <div class="home">
    <BackgroundImage />
    <div class="content">
      <div class="wrapper">
        <section>
          <h1>To-Do App</h1>
          <p>
            It's hard to keep everything you have to do under control. Keep
            track of all your tasks in one place.
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
section h1 {
  text-transform: uppercase;
}
</style>
