<template>
  <!-- <section style="display: flex; justify-content: center">
    <div class="wrapper">
      <form action="">
        <h1 class="head">Octal infotech</h1>
        <br />
        <div
          class="space-y-4"
          style="display: flex; gap: 10%; justify-content: center"
        >
          <img
            src="https://octalinfotech.com/img/octal-logo.png"
            loading="lazy"
            class="w-14 animate-bounce rounded-full"
            alt="tailus logo"
          />
          <h2
            class="text-lg font-bold text-cyan-900"
            style="font-size: 21px; font-family: Georgia, serif"
          >
            Admin Login To Your Blog
          </h2>
        </div>
        <div class="input-box">
          <input
            v-model="Email"
            type="text"
            placeholder="Email"
            @input="InputEvent1"
            style="border-radius: 30px; color: black"
          />
          <i class="bx bxs-user"></i>
          <p style="color: red">{{ Error.Email }}</p>
        </div>
        <div class="input-box">
          <input
            v-model="Password"
            type=""
            placeholder="Password"
            style="border-radius: 50px; color: black; width: 100%"
            @input="InputEvent2"
          />
          <i class="bx bxs-lock-alt"></i>
          <p style="color: red">{{ Error.Password }}</p>
        </div>
        <div class="remember-forget">
          <label for=""> Remember me</label>
          <input type="checkbox" />
        </div>
        <button class="btn btn-secondary" @click.prevent="Login">Login</button>
        &nbsp;
        <div class="register-link">
          <p><i>Don't have an account </i><a href="">Register</a></p>
        </div>
      </form>
    </div>
  </section> -->

  <section class="login-page">
    <form>
      <div class="box">
        <div class="form-head">
          <div class="flex justify-center pb-3 items-center space-x-4">
            <img class="h-12 w-auto rounded-2xl" src="http://octalinfotech.com/img/octal-logo.png" alt="Your Company" />
            <span class="font-bold text-2xl ">Octal Infotech</span>
          </div>
        </div>
        <div class="form-body">
          <input v-model="Email" type="text" placeholder="Email" @input="InputEvent1" />
          <p style="color: red">{{ Error.Email }}</p>
          <input v-model="Password" type="" placeholder="Password" @input="InputEvent2" />

          <p style="color: red">{{ Error.Password }}</p>
        </div>
        <div class="form-footer">
          <button type="submit" @click.prevent="Login">Log In</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import store from "@/vuex/store";
import axios from "axios";
import { ref } from "vue";
import router from "./router";
// import { createToaster } from "@meforma/vue-toaster";
import { useToast } from "vue-toastification";

const toast = useToast();

// const toaster = createToaster({
/* options */
// });

const Email = ref("");
const Password = ref("");
const Error = ref({});

const InputEvent2 = () => {
  Error.value.Password = " ";
};
const InputEvent1 = () => {
  Error.value.Email = " ";
};

const Login = () => {
  Error.value = {};
  // if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(Error.value)) {
  //     Error.value.Email = "Please enter valid email address";
  // }
  if (!Email.value) {
    Error.value.Email = "Email is required";
  }

  if (!Password.value) {
    Error.value.Password = "Password is required";
  }
  if (Object.keys(Error.value).length > 0) {
    return;
  }

  // ==================
  axios
    .post("https://blog-api-dev.octalinfotech.com/api/login", {
      email: Email.value,
      password: Password.value,
    })
    .then((response) => {
      console.log(response.data.message);
      // localStorage.setItem("user", JSON.stringify(response.data.data));
      store.commit("loginpage", response.data.data);

      toast.success(response.data.message, {
        timeout: 4000,
      });
      router.push({
        name: "Admin",
      });
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response);
      toast.e(err.response.data.message, {
        timeout: 4000,
      });
    });

  // ====================

  // fetch("https://blog-api-dev.octalinfotech.com/api/login", {
  //         method: "POST",
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //             email: this.Email,
  //             password: this.Password,
  //         }),
  //     })
  //     .then((res) => res.json())
  //     .then((res) => {
  //         console.log(res);
  //         if (res.data) {
  //             console.log("login");
  //             this.$toast.show(res.message, {
  //                 type: "success",
  //                 position: "top-right",
  //             });
  //             localStorage.setItem("data", JSON.stringify(res.data));

  //         } else {
  //             console.log(res.message);
  //         }
  //     });
  // this.$router.push({
  //     name: 'HomePage'
  // })
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
  outline: none !important;
}

.login-page {
  background-image: url("https://image.divscode.com/login-bg.jpg");
  background-size: cover;
  height: 100vh;
  position: relative;
}

.login-page:after {
  content: "";
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.login-page .box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 280px;
  z-index: 2;
}

.login-page .box .form-head h2 {
  text-align: center;
  margin: 10px 0px 20px;
  color: #ffffff;
}

.login-page .box .form-body {
  display: flex;
  flex-direction: column;
}

.login-page .box .form-body input {
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid #ffffff;
  width: 100%;
  background-color: transparent;
  border-radius: 20px;
  text-align: center;
  color: #ffffff;
  transition: box-shadow 0.5s ease;
}

.login-page .box .form-body input:focus {
  box-shadow: 0px 0px 10px black;
}

.login-page .box .form-body input::placeholder {
  color: #ffffff;
}

.login-page .box .form-footer {
  text-align: center;
}

.login-page .box .form-footer button {
  height: 40px;
  border-radius: 20px;
  padding: 0px 50px;
  color: #ffffff;
  background-color: #f44336;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.5s ease;
}

.login-page .box .form-footer button:hover {
  box-shadow: 0px 0px 10px black;
}
</style>
