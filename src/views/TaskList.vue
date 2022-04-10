<template>
  <div class="task-list">
    <div class="overlay"></div>
    <div class="content" onload="contentFunction()">
      <div class="wrapper">
        <section class="empty-list">
          <h1>Task list</h1>
          <p>You have no tasks added onto the task list. &#128532;</p>
          <p>
            Go visit <router-link to="/addtask">Add Task</router-link> and list
            all your tasks. &#128578;
          </p>
        </section>
        <section class="list">
          <h1>Edit tasks</h1>
          <ul onload="contentFunction()">
            <li></li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { content } from "./AddToDo.vue";

export default {
  methods: {
    contentFunction: function () {
      if (content == true) {
        document.querySelector(".empty-list").classList.add("active");
        console.log("RADI!!!!");
      } else {
        document.querySelector(".list").classList.add("active");
        console.log("RADI!!!!");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.task-list {
  background-color: #445c62;
  height: 100vh;
  background-image: url("../assets/task-list.png");
  background-size: 100vh;
  background-repeat: no-repeat;
}

p a {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: #4cb494;
}
.empty-list {
  display: none;
}
.empty-list.active {
  display: block;
}
.list {
  display: none;
}
.list.active {
  display: block;
}
</style>
