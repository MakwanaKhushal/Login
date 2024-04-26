<template>
  <br><br><br>
 
  <footer class="section bg-footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="">
                    <h6 class="footer-heading text-uppercase text-white">Information</h6>
                    <ul class="list-unstyled footer-link mt-4">
                        <li><a href="">Pages</a></li>
                        <li><a href="">Our Team</a></li>
                        <li><a href="">Feuchers</a></li>
                        <li><a href="">Pricing</a></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-3 footer-col">
                <div class="">
                    <h6 class="footer-heading text-uppercase text-white">Categories</h6>
                    <ul v-for="api in data" :key="api" class="list-unstyled footer-link  ">
                        <li><a href="#">{{ api.name }} &nbsp;&nbsp;  <span>({{api.blog_count}})</span></a></li>
                        <!-- <li><a href="">Video Tutorial</a></li>
                        <li><a href="">Term &amp; Service</a></li>
                        <li><a href="">Zeeko API</a></li> -->
                    </ul>
                </div>
            </div>

            <div class="col-lg-2">
                <div class="">
                    <h6 class="footer-heading text-uppercase text-white">Help</h6>
                    <ul class="list-unstyled footer-link mt-4">
                        <li><a href="">Sign Up </a></li>
                        <li><a href="">Login</a></li>
                        <li><a href="">Terms of Services</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="">
                    <h6 class="footer-heading text-uppercase text-white">Contact Us</h6>
                    <p class="contact-info mt-4">Contact us if need help withanything</p>
                    <p class="contact-info">+01 123-456-7890</p>
                    <div class="mt-5">
                        <ul class="list-inline">
                            <li class="list-inline-item"><a href="#"><i class="fab facebook footer-social-icon fa-facebook-f"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fab twitter footer-social-icon fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fab google footer-social-icon fa-google"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fab apple footer-social-icon fa-apple"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="text-center mt-5">
        <p class="footer-alt mb-0 f-14">2019 © Anup, All Rights Reserved</p>
    </div>
</footer>
</template>
<script >
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      
      data: {},

    };
  },
  methods: {
    // getCatagaris() {
    //   let user = localStorage.getItem("user");
    //   user = JSON.parse(user);
    //   let token = user.token;
    //   console.log(token);

    //   axios
    //     .get(
    //       "https://blog-api-dev.octalinfotech.com/api/categories?page=",
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       console.log(res);
    //       this.data = res.data.data.data;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
   
    // },
    count() {
      let user = localStorage.getItem("user");
      user = JSON.parse(user);
      let token = user.token;
      // console.log(token);

      axios
        .get(
          "https://blog-api-dev.octalinfotech.com/api/categories/count",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          // console.log(res);
          this.data = res.data.data.data;
          // console.log(res.data.data.data)
          // console.log(res.data.data.data.name)
          // console.log(res.data.data.data.blog_count)
        })
        .catch((error) => {
          console.log(error);
        });
   
    },
  },
  mounted() {
        // this.getCatagaris();
        this.count();
    },
}


</script>

<style scoped>
.bg-footer {
  background-color: #33383c;
  padding: 50px 0 30px;
}
.footer-heading {
  letter-spacing: 2px;
}

.footer-link a {
  color: #acacac;
  line-height: 40px;
  font-size: 14px;
  transition: all 0.5s;
}

.footer-link a:hover {
  color: #1bbc9b;
}

.contact-info {
  color: #acacac;
  font-size: 14px;
}

.footer-social-icon {
  font-size: 15px;
  height: 34px;
  width: 34px;
  line-height: 34px;
  border-radius: 3px;
  text-align: center;
  display: inline-block;
}

.facebook {
  background-color: #4e71a8;
  color: #ffffff;
}

.twitter {
  background-color: #55acee;
  color: #ffffff;
}

.google {
  background-color: #d6492f;
  color: #ffffff;
}

.apple {
  background-color: #424041;
  color: #ffffff;
}

.footer-alt {
  color: #acacac;
}

.footer-heading {
  position: relative;
  padding-bottom: 12px;
}

.footer-heading:after {
  content: '';
  width: 25px;
  border-bottom: 1px solid #FFF;
  position: absolute;
  left: 0;
  bottom: 0;
  display: block;
  border-bottom: 1px solid #1bbc9b;
}
.footer-col:hover{
  transition: all 0.3s ease;
}

</style>