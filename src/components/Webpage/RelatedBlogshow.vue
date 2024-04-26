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
            <i class="fa-solid fa-house" ></i>
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
  
  