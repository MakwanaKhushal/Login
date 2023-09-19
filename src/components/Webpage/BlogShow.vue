<template >
   <WebNavbar />

       <section class="container ">
        <div >
        
          <div style="display: flex;flex-direction: column;justify-content: center; align-items: flex-start;">
            <router-link to="/" class="d-flex" style="    align-items: baseline;">
                <i class="fa-solid fa-house" @click="backBlog"></i> 
                &nbsp;<pre> <b>></b> </pre>
                <b>{{detail.category_name}}</b>
            </router-link>
            <br>
            <h1 class="text-4xl	"><b>{{  detail.title }}</b></h1>
            <br>

            <p class="description"> by &nbsp;&nbsp; <img src="https://ca.slack-edge.com/T04HNPJ1PV3-U04HWPFL198-417360c899fd-68" style="width:50px; border-radius:100%;">
             &nbsp;&nbsp;<i>{{ detail.user_name }}</i> &nbsp;&nbsp;<b>{{ detail.date }}</b></p>
          </div>
          <br>
          <div>
          <p class="d-flex" v-html="detail.description"></p>
            <img :src="detail.image" style="width: 50%;height: 50%;">
          </div>
        </div>
      </section><br><br><br><br>


<hr>
  <section class="bg-white dark:bg-gray-900" id="Testimonial">
  <div id="carouselExampleControls" class="carousel slide text-center carousel-dark" data-mdb-ride="carousel" style="width: 65%;margin-left:371px;margin-top: 100px;">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="rounded-circle shadow-1-strong mb-4"
          src="http://octalinfotech.com/img/octal-logo.png" alt="avatar"
          style="width: 150px;margin-left:535px;"  />
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


<section class="bg-white dark:bg-gray-900" id="Testimonial">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto " style=" padding: 50px;">
          <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3 mt-lg-4">
              <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700  ">
                  <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                  
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
              </div>
          </figcaption>
      </figure>
  </div>
</section>
<br><br><br><br>

<!-- https://blog-api-dev.octalinfotech.com/api/blogs/312/show -->

   <WebFooter />
</template>


<script setup>
import WebNavbar from '@/components/Webpage/WebNavbar'
import WebFooter from '@/components/Webpage/WebFooter'
// import "vue3-carousel/dist/carousel.css";
// import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from 'vue-router'
   const route = useRoute()

// const details = ref({});
const detail = ref([]);

const blog = () => {

  axios.get(`https://blog-api-dev.octalinfotech.com/blogs/${route.params.id}/show`, {
      headers: {
        token: "7ELX2CnkfqWpipzXNB5QV9sxSf4dPk",
      },
    })
    .then((res) => {
      console.log(res);
      console.log(res.data.data);
      detail.value = res.data.data
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
blog()
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
  width: 60%;
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