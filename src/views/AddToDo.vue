<template>
  <div class="to-do-list">
    <div class="overlay"></div>
    <div class="content">
      <div class="wrapper">
        <section>
          <h1>Add task</h1>
          <form @submit.prevent="addNewTask">
            <div class="input-field">
              <input type="text" id="new-to-do" v-model="newToDo" required />
              <label for="new-to-do">Add your new task:</label>
            </div>
            <button>Add task</button>
          </form>
        </section>
        <ul v-for="newToDo in toDos" :key="newToDo">
          <li>{{ newToDo.addedData }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const newToDo = ref("");
    const toDos = ref([]);

    function addNewTask() {
      toDos.value.push({
        done: false,
        addedData: newToDo.value,

        // returns true if the content was added onto the list
        content: true,
      });
      newToDo.value = "";
    }
    return {
      toDos,
      newToDo,
      addNewTask,
    };
  },
};
</script>

<style lang="scss" scoped>
.to-do-list {
  background-color: #445c62;
  height: 100vh;
  background-image: url("../assets/to-do-list.png");
  background-size: 100vh;
  background-repeat: no-repeat;
}
form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: left;
}
form button {
  border: 0;
  width: 150px;
  padding: 10px 0;
  border-radius: 20px;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #4cb494;
  font-weight: bold;
  color: #0f0f0f;
  margin-top: 50px;
  box-shadow: 2px 2px 5px #0f0f0f;
}
form button:active {
  transform: scale(0.95);
}
.input-field input {
  all: unset;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #4cb494;
  background-color: #ffffff11;
  text-indent: 10px;
  color: #4cb494;
}
.input-field input:focus {
  padding-top: 8px;
  transition: 0.2s ease all;
}
.input-field {
  position: relative;
  width: 100%;
}
label {
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 14px;
  transition: 0.2s ease all;
}
.input-field input:focus ~ label,
.input-field input:not(:focus):valid ~ label {
  top: 5px;
  font-size: 11px;
  opacity: 1;
}
</style>
