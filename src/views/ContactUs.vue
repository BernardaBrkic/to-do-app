<template>
  <div class="contact-us">
    <div class="overlay"></div>
    <div class="content">
      <div class="wrapper">
        <section>
          <h1>Contact us</h1>
          <form @submit.prevent="sendMessage">
            <div class="input-field">
              <input
                type="text"
                id="firstname"
                v-model="firstname"
                name="firstname"
                required
              />
              <label for="firstname">Firstname</label>
            </div>
            <div class="input-field">
              <input
                type="text"
                id="lastname"
                v-model="lastname"
                name="lastname"
                required
              />
              <label for="lastname">Lastname</label>
            </div>
            <div class="input-field">
              <input
                type="email"
                id="email"
                v-model="senderAdress"
                name="senderAdress"
                required
              />
              <label for="email">Email adress</label>
            </div>
            <div class="input-field">
              <textarea
                id="message"
                v-model="message"
                name="message"
                required
              />
              <label for="message">Your message</label>
            </div>
            <button>Send message</button>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      senderAdress: "",
      message: "",
    };
  },
  methods: {
    sendMessage(e) {
      try {
        emailjs.sendForm(
          "service_lqivm2d",
          "template_gjj017b",
          e.target,
          "user_HAvXbKaVfznM5LVHE1Tzs",
          {
            firstname: this.firstname,
            lastname: this.lastname,
            senderAdress: this.senderAdress,
            message: this.message,
          }
        );
        this.firstname = "";
        this.lastname = "";
        this.senderAdress = "";
        this.message = "";
      } catch (error) {
        console.log({ error });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-us {
  background-color: #445c62;
  height: 100vh;
  background-image: url("../assets/contact-us.png");
  background-size: 100vh;
  background-repeat: no-repeat;
}
.input-field input,
.input-field textarea {
  all: unset;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #4cb494;
  background-color: #ffffff11;
  padding: 0 10px;
  color: #4cb494;
}
.input-field textarea {
  height: 100px;
  word-wrap: break-word;
}
.input-field input:focus,
.input-field textarea:focus {
  padding-top: 8px;
  transition: 0.2s ease all;
}
.input-field textarea:focus {
  padding-top: 22px;
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
.input-field textarea:focus ~ label,
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
