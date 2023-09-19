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

  <br /><br />
  <hr />
  <br /><br />
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
        <p v-html="blog.description" ></p></div>
     </div>
    </div>
</div>
  </section>



<hr>
 <section class="bg-white dark:bg-gray-900" id="Testimonial">
  <div id="carouselExampleControls" class="carousel slide text-center carousel-dark" data-mdb-ride="carousel" style="width: 65%;margin-left:371px;margin-top: 100px;">
    <div class="carousel-inner ">
      <div class="carousel-item active ">
        <img class="rounded-circle shadow-1-strong mb-4 animate-bounce "
          src="http://octalinfotech.com/img/octal-logo.png" alt="avatar"
          style="width: 150px; margin: 50px;margin-left:535px;"      />
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

    <WebFooter />
</template>
<script setup>
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
  axios
    .get("https://blog-api-dev.octalinfotech.com/blogs?page=1&search", {
      headers: {
        token: "7ELX2CnkfqWpipzXNB5QV9sxSf4dPk",
      },
    })
    .then((res) => {
      console.log(res);
      console.log(res.data.data.data);
      detail.value = res.data.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  showWeb();
  blog();
});
</script>
<style scoped>
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
    width:200px;
  height: 200px;
  border-radius: 10px;
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



.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
}
</style>
