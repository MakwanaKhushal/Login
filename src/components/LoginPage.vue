<template>
<section style="display: flex; justify-content: center">
    <div class="wrapper">
        <form action="">
            <h1 style="color: black">Login</h1>
            <div class="input-box">
                <input v-model="Email" type="text" placeholder="Email" style="border-radius: 50px; color: black; width: 90%" required />
                <i class="bx bxs-user"></i>
                <p style="color: red">{{ this.Error.Email }}</p>
            </div>
            <div class="input-box">
                <input v-model="Password" type="password" placeholder="Password" style="border-radius: 50px; color: black; width: 90%" @click="hideUnhide" required />
                <i class="bx bxs-lock-alt"></i>
                <p style="color: red">{{ this.Error.Password }}</p>
            </div>
            <div class="remember-forget">
                <label for=""> <input type="checkbox" /> Remember me</label>
                <a href="#">forget password </a>
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

<script>
export default {
    name: "loginPageComponents",
    data() {
        return {
            Email: "",
            Password: "",
            Error: {},
        };
    },
    methods: {
        Login() {
            this.Error = {};
            if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.Email)) {
                this.Error.Email = "Please enter valid email address";
            }
            if (!this.Email) {
                this.Error.Email = "Email is required";
            }

            if (!this.Password) {
                this.Error.Password = "Password is required";
            }
            if (Object.keys(this.Error).length > 0) {
                return;
            }

            // let details = {
            //     Email: this.Email,
            //     Password: this.Password
            // }
            fetch("https://blog-api-dev.octalinfotech.com/api/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: this.Email,
                        password: this.Password,
                    }),
                })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                    if (res.data) {
                        console.log("login");
                        this.$toast.show(res.message, {
                            type: "success",
                            position: "top-right",
                        });
                        localStorage.setItem("data", JSON.stringify(res.data));

                    } else {
                        console.log(res.message);
                    }
                });
            this.$router.push({
                name: 'HomePage'
            })
        },
    },
};
</script>

<style scoped>
.wrapper {
    margin-top: 50px;
    width: 420px;
    background: transparent;
    color: #fff;
    border: 2px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(100px);
    box-shadow: 0 0 10px rgb(0, 67, 85);
    border-radius: 10px;
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
