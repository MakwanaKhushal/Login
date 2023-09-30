<template>
  <WebNavbar />

  <section class="container">
    <div>
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        "
      >
        <router-link to="/" class="d-flex" style="align-items: baseline">
          <i class="fa-solid fa-house" @click="backBlog"></i>
          &nbsp;
          <pre> <b>></b> </pre>
          <b>{{ detail.category_name }}</b>
        </router-link>
        <br />
        <h1 class="text-4xl">
          <b>{{ detail.title }}</b>
        </h1>
        <br />
        <p class="description">
          by &nbsp;&nbsp;
          <img
            src="https://ca.slack-edge.com/T04HNPJ1PV3-U04HWPFL198-417360c899fd-68"
            style="width: 50px; border-radius: 100%"
          />
          &nbsp;&nbsp;<b>{{ detail.user_name }}</b> &nbsp;&nbsp;<i>{{
            detail.date
          }}</i>
        </p>
      </div>

      <div>
        <div class="flex gap-2 border-b-[1px] py-5 flex-wrap">
          <button
            class="gap-2 inline-flex items-center px-8 text-white text-sm py-1 bg-[#3059b0]"
          >
            <i class="fa-brands fa-twitter"></i>SHARE
          </button>
          <button
            class="gap-2 inline-flex items-center px-8 text-white text-sm py-1 bg-[#55acef]"
          >
            <i class="fa-brands fa-facebook-f"></i>SHARE
          </button>
          <button
            class="gap-2 inline-flex items-center px-3 text-white text-sm py-1 bg-[#444]"
          >
            <i class="fa-brands fa-pinterest-p"></i>
          </button>
          <button
            class="gap-2 inline-flex items-center px-3 text-white text-sm py-1 bg-[#e52730]"
          >
            <i class="fa-regular fa-envelope"></i>
          </button>
        </div>
        <br />
        <div class="detail">
          <img :src="detail.image" style="width: 700px; height: 600px" />
          <p
            class="text-2xl"
            style="
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: baseline;
              margin-bottom: 300px;
            "
            v-html="detail.description"
          ></p>
        </div>
      </div>
    </div>
  </section>
  <br />

  <section class="bg-white dark:bg-gray-900" id="Testimonial">
    <div
      id="carouselExampleControls"
      class="carousel slide text-center carousel-dark"
      data-mdb-ride="carousel"
      style="width: 65%; margin-left: 371px; margin-top: 100px"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="rounded-circle shadow-1-strong mb-4"
            src="http://octalinfotech.com/img/octal-logo.png"
            alt="avatar"
            style="width: 150px; margin-left: 535px"
          />
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <h5 class="mb-3" style="font-size: 25px; font-weight: 700">
                Ajay Makwana
              </h5>
              <p style="font-size: 20px; font-weight: 500">Octal Infotech</p>
              <p class="text-muted">
                <i class="fas fa-quote-left pe-2"></i>
                One-stop solution for a wide range of web development services.
                Fully customized and responsive websites - world class solutions
                to our valued customers. Experise at fullscale, personalized -
                unlocking endless possibilities. Shopify and Shopify Plus
                development is Octal Infotech's specialty.We have a top team of
                ecommerce web developers.
              </p>
            </div>
          </div>
          <ul
            class="list-unstyled d-flex justify-content-center text-warning mb-0"
          >
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
  <br /><br /><br /><br />

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
const detail = ref([]);

const blog = () => {
  axios
    .get(
      `https://blog-api-dev.octalinfotech.com/blogs/${route.params.id}/show`,
      {
        headers: {
          token: "7ELX2CnkfqWpipzXNB5QV9sxSf4dPk",
        },
      }
    )
    .then((res) => {
      detail.value = res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  blog();
});
</script>

<style scoped>
.description {
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
.detail {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
}
</style>
