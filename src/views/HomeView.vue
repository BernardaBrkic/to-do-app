<template>
  <div class="home">
    <div class="overlay"></div>
    <div class="content">
      <div class="wrapper">
        <section>
          <h1>To-Do App</h1>
          <p>
            It's hard to keep everything you have to do under control. Keep
            track of all your tasks in one place.
          </p>
          <p>
            The app allows you to add, delete and edit tasks you have to do in
            your everyday life.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
section h1 {
  text-transform: uppercase;
}
.home {
  background-image: url("../assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -10px 60%;
  background-color: #445c62;
  background-attachment: fixed;
  height: 100vh;
  z-index: -1;
}
</style>
