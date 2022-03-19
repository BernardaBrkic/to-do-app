<template>
  <div class="contact-us">
    <div class="overlay"></div>
    <div class="content">
      <div class="wrapper">
        <section>
          <h1>Contact us</h1>
          <form action="">
            <div class="input-field">
              <input type="text" id="firstname" required />
              <label for="firstname">Firstname</label>
            </div>
            <div class="input-field">
              <input type="text" id="lastname" required />
              <label for="lastname">Lastname</label>
            </div>
            <div class="input-field">
              <input type="email" id="email" required />
              <label for="email">Email adress</label>
            </div>
            <button>Send message</button>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-us {
  background-color: #445c62;
  height: 100vh;
  background-image: url("../assets/contact-us.png");
  background-size: 100vh;
  background-repeat: no-repeat;
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
.input-field:not(:first-child) {
  margin-top: 25px;
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
form,
section h1 {
  text-align: left;
}
form {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
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
</style>
