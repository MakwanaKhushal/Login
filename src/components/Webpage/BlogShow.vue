<template>
  <WebNavbar />

  <section class="container">
    <div>
      <div style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        ">
        <router-link to="/" class="d-flex" style="align-items: baseline">
          <i class="fa-solid fa-house" @click="backBlog"></i>
          &nbsp;
          <pre> <b>></b> </pre>
          <b>{{ detail.category_name }}</b>
        </router-link>
        <br />
        <h1 class="text-4xl">
          <b>{{ detail.category_name }}</b>
        </h1>
        <br />
        <p class="inline-flex items-center gap-3">By<img class="h-8 w-8 flex-shrink-0 rounded-full object-cover"
            src="https://ca.slack-edge.com/T04HNPJ1PV3-U04HWPFL198-417360c899fd-68"> {{ detail.user_name }}<span
            class="taghover text-sm text-gray-400 cursor-pointer">{{ detail.date }}
          </span></p>
      </div>

      <div>
        <div class="flex gap-2 border-b-[1px] py-5 flex-wrap">
          <button class="gap-2 inline-flex items-center px-8 text-white text-sm py-1 bg-[#3059b0]">
            <i class="fa-brands fa-twitter"></i>SHARE
          </button>
          <button class="gap-2 inline-flex items-center px-8 text-white text-sm py-1 bg-[#55acef]">
            <i class="fa-brands fa-facebook-f"></i>SHARE
          </button>
          <button class="gap-2 inline-flex items-center px-3 text-white text-sm py-1 bg-[#444]">
            <i class="fa-brands fa-pinterest-p"></i>
          </button>
          <button class="gap-2 inline-flex items-center px-3 text-white text-sm py-1 bg-[#e52730]">
            <i class="fa-regular fa-envelope"></i>
          </button>
        </div>
        <br />
        <div style="display: flex;">
          <img :src="detail.image" style="width: 700px; height: 600px" />
          <p class="text-2xl" style="
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: baseline;
       
            " v-html="detail.description"></p>

        </div>
      </div>
    </div>
  </section>

  <br><br><br><br>
  <h1 class="text-3xl	underline hover:underline-offset-8">Related Post</h1>
  <br>
  <section class="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:grid-cols-3 container h-  " id="Menu">

    <div v-for="blog in detail2" :key="blog" class="transition-all duration-700 hover:scale-110 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <router-link :to="'/relatedblogshow/' + blog.id ">
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

  <WebFooter />
</template>

<script setup>
import WebNavbar from "@/components/Webpage/WebNavbar";
import WebFooter from "@/components/Webpage/WebFooter";
// import "vue3-carousel/dist/carousel.css";
// import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
const route = useRoute();

// const details = ref({});
const detail = ref({});
const detail2 = ref({});

const blog = () => {
  axios
    .get(
      `https://blog-api-dev.octalinfotech.com/api/blogs/${route.params.id}/show`,
      {
        headers: {
          token: "7ELX2CnkfqWpipzXNB5QV9sxSf4dPk",
        },
      }
    )
    .then((res) => {
      console.log(res);
      detail.value = res.data.data.blog;
      detail2.value = res.data.data.latestPost;
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  blog();
});
</script>

