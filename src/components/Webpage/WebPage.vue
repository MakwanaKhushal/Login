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
          <router-link :to="'/categorieshow/' + blog.id">
            <div class="box" >
              <img :src="blog.image"
                class="w-[3rem] lg:w-[3rem] lg:h-[6rem] xl:w-[6rem] xl:h-[6rem] md:w-[4rem] md:h-[4rem] lg:rounded-full md:rounded-full rounded-full" />
              <b>{{ blog.name }}</b>
            </div>
          </router-link>
        </slide>

        <template #addons>
          <navigation />

        </template>
      </carousel>
    </div>
  </section>


  <h6><b class="text-2xl" style="font-family: Georgia, serif;">Latest blog page</b></h6><br>



  <!-- <section class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 container" id="Menu">

    <div v-for="blog in detail" :key="blog" class="container grid grid-cols-1">
      <div>
        <div class="box">
          <router-link :to="'/blogShow/' + blog.id">
            <img :src="blog.image" class="img2" />
          </router-link>

          <div class="p-6 space-y-2">
            <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">{{ blog.title }}</h3>
          
            <p v-html="blog.description.length > 50 ? blog.description.substring(0, 40) + '...' : blog.description"
              style="text-align:justify; font-family: system-ui;"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
   -->
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

  <br><br>
  <section>
    <div class="boxs container  grid grid-cols-5">
      <div class="box1  grid grid-cols-1">
        <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/featured-logo-01.png"
          style="border-radius:100%;">
      </div>
      <div class="box2">
        <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/featured-logo-02.png"
          alt="">
      </div>
      <div class="box3">
        <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/featured-logo-03.png"
          alt="">
      </div>
      <div class="box4">
        <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/featured-logo-04.png"
          alt="">
      </div>
      <div class="box5">
        <img src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/featured-logo-05.png"
          style="border-radius:100%;">
      </div>

    </div>
  </section>
  <br><br>



  <!-- <div class="container">
	<div class="row">
			<h1>contact us</h1>
	</div>
	<div class="row">
			<h4 style="text-align:center">We'd love to hear from you!</h4>
	</div>
	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" required />
					<label>Name</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="text" required />
					<label>Email</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input" style="float:right;">
					<input type="text" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="btn-lrg submit-btn">Send Message</div>
			</div>
	</div>
</div> -->

  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">

        <div class="flex justify-center mt-5 hover-effect1">
          <img src="https://avatars.slack-edge.com/2023-01-06/4616464962849_68b928e9ceb717e5b796_88.jpg" alt=""
            class="rounded-full">
        </div>
        <blockquote>
          <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of
            predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next
            SaaS application."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center mt-6 space-x-3">
          <img class="w-6 h-6 rounded-full"
            src="https://avatars.slack-edge.com/2023-01-06/4616464962849_68b928e9ceb717e5b796_88.jpg"
            alt="profile picture">
          <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <div class="pr-3 font-medium text-gray-900 dark:text-white">Octal Infotech</div>
            <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at octal Infotech</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>





  <!-- ============= -->


  <div id="default-carousel" class="relative w-3/5 h-[480px] container" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://marketplace-cdn.atlassian.com/files/422562e8-0358-462a-8dca-301eeb611c93?fileType=image&mode=full-fit"
          class="absolute  w-full h-[480px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="...">
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/125/969/desktop-wallpaper-web-development-posted-by-sarah-anderson-full-stack.jpg"
          class="absolute  w-full h-[480px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="...">
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://t3.ftcdn.net/jpg/02/16/03/28/360_F_216032849_rE3hjVYDhZMeO5OxE9bWsH7jYSucG3Ky.jpg"
          class="absolute  w-full h-[480px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="...">
      </div>
      <!-- Item 4 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/336072064/original/6428f500c92850befd71d58abf50780bff0bc89f/develop-html-css-javascript-web-pages-for-front-end.jpg"
          class="absolute block w-full h-[500px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
          alt="...">
      </div>
      <!-- Item 5 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png"
          class="absolute  w-full h-[480px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="...">
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      <button type="button" class="w-3 h-3 rounded-full bg-black" aria-current="true" aria-label="Slide 1"
        data-carousel-slide-to="0"></button>
      <button type="button" class="w-3 h-3 rounded-full bg-black" aria-current="false" aria-label="Slide 2"
        data-carousel-slide-to="1"></button>
      <button type="button" class="w-3 h-3 rounded-full bg-black" aria-current="false" aria-label="Slide 3"
        data-carousel-slide-to="2"></button>
      <button type="button" class="w-3 h-3 rounded-full bg-black" aria-current="false" aria-label="Slide 4"
        data-carousel-slide-to="3"></button>
      <button type="button" class="w-3 h-3 rounded-full bg-black" aria-current="false" aria-label="Slide 5"
        data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
  <br><br><br>
  <!-- ============= -->
  <div class="container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.8420446824457!2d72.85527284875609!3d21.23522212117813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f30b7912685%3A0x96e904c8eb74102e!2sOctal%20Infotech!5e1!3m2!1sen!2sin!4v1695295452374!5m2!1sen!2sin"
      width="100%" height="450" style="box-shadow: 20px 20px 40px 20px #01030a8c;" allowfullscreen=""
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

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

// const showcategories = (id) => {
//   console.log(id);
//   router.push({
//     name: "CategorieShow",
//     params: { id: id },
//   });
// };

onMounted(() => {

  showWeb();
  blog();
});
</script>
<style scoped>
.boxs {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 40px 10px #00000049;
  border-radius: 100px;

}

.cbox {
  box-shadow: 10px 20px 10px #00000049;


}

.description {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.img2 {
  width: 300px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 5px 5px 25px 10px #0000005b;

}

.img2:hover {
  box-shadow: 10px 10px 40px 10px #000000;
}

.carousel {
  position: relative;
  text-align: center;
  box-sizing: border-box;
  touch-action: pan-y;
  overscroll-behavior: none;
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

.active {
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
}
</style>
<style scoped>
body {
  background-color: #444442;
  padding-top: 85px;
}

h1 {
  font-family: 'Poppins', sans-serif, 'arial';
  font-weight: 600;
  font-size: 72px;
  color: rgb(0, 0, 0);
  text-align: center;
}

h4 {
  font-family: 'Roboto', sans-serif, 'arial';
  font-weight: 400;
  font-size: 20px;
  color: #9b9b9b;
  line-height: 1.5;
}

/* ///// inputs /////*/

input:focus~label,
textarea:focus~label,
input:valid~label,
textarea:valid~label {
  font-size: 0.75em;
  color: #999;
  top: -5px;
  -webkit-transition: all 0.225s ease;
  transition: all 0.225s ease;
}

.styled-input {
  float: left;
  width: 293px;
  margin: 1rem 0;
  position: relative;
  border-radius: 4px;
}

@media only screen and (max-width: 768px) {
  .styled-input {
    width: 100%;
  }
}

.styled-input label {
  color: #999;
  padding: 1.3rem 30px 1rem 30px;
  position: absolute;
  top: 10px;
  left: 0;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  pointer-events: none;
}

.styled-input.wide {
  width: 650px;
  max-width: 100%;
}

input,
textarea {
  padding: 30px;
  border: 0;
  width: 100%;
  font-size: 1rem;
  background-color: #2d2d2d;
  color: white;
  border-radius: 4px;
}

input:focus,
textarea:focus {
  outline: 0;
}

input:focus~span,
textarea:focus~span {
  width: 100%;
  -webkit-transition: all 0.075s ease;
  transition: all 0.075s ease;
}

textarea {
  width: 100%;
  min-height: 15em;
}

.input-container {
  width: 650px;
  max-width: 100%;
  margin: 20px auto 25px auto;
}

.submit-btn {
  float: right;
  padding: 7px 35px;
  border-radius: 60px;
  display: inline-block;
  background-color: #4b8cfb;
  color: white;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06),
    0 2px 10px 0 rgba(0, 0, 0, 0.07);
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.submit-btn:hover {
  transform: translateY(1px);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.10),
    0 1px 1px 0 rgba(0, 0, 0, 0.09);
}

@media (max-width: 768px) {
  .submit-btn {
    width: 100%;
    float: none;
    text-align: center;
  }
}

input[type=checkbox]+label {
  color: #ccc;
  font-style: italic;
}

input[type=checkbox]:checked+label {
  color: #f00;
  font-style: normal;
}
</style>