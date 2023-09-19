<template>


  <section style="display: flex; justify-content: center">
    <div class="wrapper">
      <form action="">
        <div class="space-y-4" style="display: flex;
    justify-content: center;
    align-items: center;">
      <img
        src="https://octalinfotech.com/img/octal-logo.png"
        loading="lazy"
        class="w-14 animate-bounce rounded-full"
        alt="tailus logo"
      />
      <h2 class="mb-8 text-2xl text-cyan-900 font-bold">
        Admin Login <br />
        Login To Your Blog
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
  </section>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import router from "./router";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({
  /* options */
});

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
      localStorage.setItem("user", JSON.stringify(response.data.data));

      toaster.show(response.data.message, {
        type: "success",
        position: "top-right",
      });
      router.push({
        name: "Admin",
      });
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response);
      toaster.show(err.response.data.message, {
        type: "error",
        position: "top-right",
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
.wrapper {
  margin-top: 50px;
  width: 30%;
  background: aliceblue;
  color: #fff;
  border: 2px solid rgb(130, 52, 255);
  backdrop-filter: blur(100px);
box-shadow: 12px 12px 2px 1px rgba(34, 34, 196, 0.226); 
 border-radius: 20px;
  padding: 30px 40px;
}

.wrapper h1 {
  font-size: 36px;
  text-align: center;
}

.wrapper .input-box {
  position: relative;
  width: 100%;
  height: 50;
  margin: 30px 0;
}

.input-box input {
  width: 100%;
  color: black;
  height: 100%;
  background: transparent;
  outline: none;
  border: 2px solid rgba(0, 0, 0, 0.2);
  font-size: 16px;
  padding: 20px 45px 20px 20px;
}

.input-box input::placeholder {
  color: black;
}

.input-box i {
  position: absolute;
  right: 30px;
  top: 30px;
  transform: translateY(-50%);
  font-size: 20px;
  color: black;
}

.wrapper .remember-forget {
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: -15px 0 15px;
}

.remember-forget {
  accent-color: #fff;
  margin-right: 3px;
}

.remember-forget label {
  color: #000000;
}

.remember-forget a {
  color: #000000;
  text-decoration: none;
}

.remember-forget a :hover {
  text-decoration: underline;
}

.wrapper .btn {
  width: 100%;
  height: 45px;
  background: #555555;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
}

.wrapper .register-link {
  font-size: 14.5px;
  text-align: center;
  margin: 20px 0 15px;
}

.register-link p {
  color: #000000;
}

.register-link p a {
  color: #000000;
  text-decoration: none;
  font-weight: 600;
}

.register-link {
  text-decoration: none;
}
</style>
