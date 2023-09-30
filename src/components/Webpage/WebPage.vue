<template>
  <WebNavbar />

  <!-- <section class="grid-container" id="Home">
    <div class="container grid grid-cols-5">
      <div v-for="data in details" :key="data">
        <div class="box">
          <img :src="data.image" class="img" />
          <b>{{ data.name }}</b>
        </div>
      </div>
    </div>
  </section>
  <br /><br />
  <hr />
  <br /><br /> -->

  <section id="Category">
    <div class="carousel">
      <carousel :items-to-show="4" style="width: 70%" >
        <slide v-for="blog in details" :key="blog" >
          <div class="box">
            <img :src="blog.image" class="img" />
            <b>{{ blog.name }}</b>
          </div>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </section>

  <br />
  
  <br /><br />
  <h6><b class="text-2xl" style="font-family: Georgia, serif;">Latest blog page</b></h6><br>
  


<section class="grid-container" id="Menu">
        
  <div class="container grid grid-cols-3">
      <div v-for="blog in detail" :key="blog">
          <div class="box">
          <router-link :to="'/blogShow/'+blog.id">
            <img :src="blog.image" class="img2" />
          </router-link>
      
          <div class="p-6 space-y-2"><h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">{{ blog.title }}</h3>
          <div class="flex items-center gap-2">
          <img src="https://ca.slack-edge.com/T04HNPJ1PV3-U04HWPFL198-417360c899fd-68" alt="" class="h-10 w-10 flex-shrink-0 rounded-full object-cover mt-1"><span class="hello text-xs dark:text-gray-400 cursor-pointer">admin <h2 class="hidden px-5 py-2 bg-slate-100 border-[0.5px] border-black absolute text-black">author Profile</h2></span>
          <span class="text-xs dark:text-gray-400">{{blog.date}}</span></div>
          <p v-html="blog.description" style="text-align:justify; font-family: system-ui;"></p></div>
      </div>
      </div>
  </div>
</section>
<br><br>
<section>
  <div class="boxs container ">
      <div class="box1 ">
        <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/featured-logo-01.png" style="border-radius:100%;">
      </div>
      <div class="box2">
        <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/featured-logo-02.png" alt="">
      </div>
      <div class="box3">
        <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/featured-logo-03.png" alt="">
      </div>
      <div class="box4">
        <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/featured-logo-04.png" alt="">
      </div>
      <div class="box5">
        <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/featured-logo-05.png" style="border-radius:100%;">
      </div>
     
  </div>
  </section>


 <section class="bg-white dark:bg-gray-900" id="Testimonial">
  <div id="carouselExampleControls" class="carousel slide text-center carousel-dark" data-mdb-ride="carousel" style="width: 65%;margin-left:371px;margin-top: 100px;">
    <div class="carousel-inner ">
      <div class="carousel-item active">
        <img class="rounded-circle shadow-1-strong mb-4 animate-bounce "
          src="https://avatars.slack-edge.com/2023-01-06/4616464962849_68b928e9ceb717e5b796_88.jpg" alt="avatar"
          style="width: 150px; margin: 50px;"      />
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <h5 class="mb-3" style="font-size: 25px;font-weight: 700;">Ajay Makwana</h5>
            <p style="font-size:20px;font-weight: 500;">Octal Infotech</p>
            <p class="text-muted">
              <i class="fas fa-quote-left pe-2"></i>
              One-stop solution for a wide range of web development services. Fully customized and responsive websites - world class solutions to our valued customers. Experise at fullscale, personalized - unlocking endless possibilities.
              Shopify and Shopify Plus development is Octal Infotech's specialty.We have a top team of ecommerce web developers.
            </p>
          </div>
        </div>
        <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
          <li><i class="fas fa-star fa-sm"></i></li>
          <li><i class="fas fa-star fa-sm"></i></li>
          <li><i class="fas fa-star fa-sm"></i></li>
          <li><i class="fas fa-star fa-sm"></i></li>
          <li><i class="far fa-star fa-sm"></i></li>
        </ul>
      </div>
    </div>
  </div>
</section>
<br><br><br>
      <div class="container"  >
      <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.8420446824457!2d72.85527284875609!3d21.23522212117813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f30b7912685%3A0x96e904c8eb74102e!2sOctal%20Infotech!5e1!3m2!1sen!2sin!4v1695295452374!5m2!1sen!2sin" width="100%" height="450" style="box-shadow: 20px 20px 40px 20px #01030a8c;" allowfullscreen=""  referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
<br><br><br>
<WebFooter />
</template>
<script setup>
//  import { useLoading } from 'vue3-loading-overlay';
    // import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import WebNavbar from '@/components/Webpage/WebNavbar'
import WebFooter from '@/components/Webpage/WebFooter'
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref, onMounted } from "vue";
import axios from "axios";
const details = ref({});
const detail = ref({});
const showWeb = () => {
  axios
    .get("https://blog-api-dev.octalinfotech.com/categories?page=1&search", {
      headers: {
        token: "7ELX2CnkfqWpipzXNB5QV9sxSf4dPk",
      },
    })
    .then((res) => {
      // console.log(res);
      details.value = res.data.data.data;
    });
};
const blog = () => {
  // let loader = useLoading();
  //   loader.show({ });
  axios
    .get("https://blog-api-dev.octalinfotech.com/blogs?page=1&search", {
      headers: {
        token: "7ELX2CnkfqWpipzXNB5QV9sxSf4dPk",
      },
    })
    .then((res) => {
      detail.value = res.data.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
    // loader.hide()
};

onMounted(() => {
  
  showWeb();
  blog();
});
</script>
<style scoped>
.boxs{
  display: flex;
  justify-content: center;
  align-items: center;
    box-shadow: 10px 10px 40px 10px #00000049;
      border-radius: 100px;

}
.cbox{
         box-shadow: 10px 20px 10px #00000049;


}
.description{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.img {
  width: 130px;
  height: 130px;
  border-radius: 100%;
  border: 3px solid;
}
.img2 {
    width:300px;
  height: 300px;
  border-radius: 10px;
      box-shadow: 5px 5px 25px 10px #0000005b;

}
.img2:hover {
    box-shadow: 10px 10px 40px 10px #000000;
}
.carousel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.head {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
}
.container {
  max-width: 1455px;
}

.active{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
}
</style>

