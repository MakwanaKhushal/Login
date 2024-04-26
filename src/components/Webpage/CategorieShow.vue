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

  <section class="carousel" id="Category">
    <div>
      <carousel :items-to-show="8">
        <slide v-for="blog in details" :key="blog">

          <div class="box" @click="showcategories(blog.id)">
            <img :src="blog.image"
              class="w-[3rem] lg:w-[3rem] lg:h-[6rem] xl:w-[6rem] xl:h-[6rem] md:w-[4rem] md:h-[4rem] lg:rounded-full md:rounded-full rounded-full" />
            <b>{{ blog.name }}</b>


          </div>

        </slide>

        <template #addons>
          <navigation />

        </template>
      </carousel>
    </div>
  </section>


  <h6><b class="text-2xl" style="font-family: Georgia, serif;">Latest blog page</b></h6><br>



  


  <section class="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:grid-cols-3 container h-  " id="Menu">

    <div v-for="blog in detail" :key="blog" class="transition-all duration-700 hover:scale-110 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <router-link :to="'/blogShow/' + blog.id ">
        <img :src="blog.image"  />
      </router-link>
      <div class="p-5">
          <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ blog.title }}</h5>
          </a>
          <p v-html="blog.description.length > 50 ? blog.description.substring(0, 60) + '...' : blog.description" class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <div class="flex items-center gap-2">
              <img src="https://ca.slack-edge.com/T04HNPJ1PV3-U04HWPFL198-417360c899fd-68" alt=""
                class="h-10 w-10 flex-shrink-0 rounded-full object-cover mt-1"><span
                class="hello text-xs dark:text-gray-400 cursor-pointer">admin <h2
                  class="hidden px-5 py-2 bg-slate-100 border-[0.5px] border-black absolute text-black">author Profile
                </h2></span>
              <span class="text-xs dark:text-gray-400">{{ blog.date }}</span>
            </div>
          </a>
      </div>
    </div>
      </section>





  <!-- ============= -->




  <WebFooter />
</template>
<script setup>
//  import { useLoading } from 'vue3-loading-overlay';
// import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import WebNavbar from '@/components/Webpage/WebNavbar'
import WebFooter from '@/components/Webpage/WebFooter'
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref, onMounted } from "vue";
import axios from "axios";
// import { useRouter } from "vue-router";

// const router = useRouter();
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
      console.log(res);
      details.value = res.data.data.data;
      console.log(res.data.data.data.id)
    });
};

const showcategories = (id) => {
  axios
    .get(`https://blog-api-dev.octalinfotech.com/api/categories/${id}/blogs`, {
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

<style >
  
</style>