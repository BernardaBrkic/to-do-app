<template>
  <nav>
    <div class="wrapper">
      <router-link to="/contactus">Contact us</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/tasklist">Task list</router-link>
      <router-link to="/addtask">Add Task</router-link>
      <router-link to="/">Home</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito");

* {
  font-family: "Nunito", sans-serif;
}
body {
  padding: 0;
  margin: 0;
}
.wrapper {
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
}
nav {
  position: fixed;
  width: 100%;
  z-index: 3;
  top: 0;
}
nav a {
  font-weight: bold;
  color: #efefef;
  text-decoration: none;
  text-transform: uppercase;
  float: right;
  margin: 20px 2%;
  font-size: 18px;
  text-shadow: 2px 2px 3px #000;
}
nav a.router-link-exact-active {
  color: #f3b58d;
  transition: 0.2s;
}
section h1 {
  color: #4cb494;
  text-shadow: 2px 2px 3px #000;
  font-size: 35px;
}
section p {
  font-size: 18px;
}
.wrapper {
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
}
.overlay {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  background-image: linear-gradient(to right, #00000000, #000000c5);
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
