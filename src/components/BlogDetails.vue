<template >
   <br>

<section class="container">
    <div >
          <div style="display: flex;flex-direction: column;justify-content: center; align-items: flex-start;">
            <router-link to="/admin/blog" class="d-flex" style="    align-items: baseline;">
                <i class="fa-solid fa-house" @click="backBlog"></i> 
                &nbsp;<pre> <b>></b> </pre>
                <b>{{detail.category_name}}</b>
            </router-link>
            <br>
            <h1 class="text-4xl	"><b>{{  detail.title }}</b></h1>
            <br>
            <p class="description"> by &nbsp;&nbsp; <img src="https://ca.slack-edge.com/T04HNPJ1PV3-U04HWPFL198-417360c899fd-68" style="width:50px; border-radius:100%;">
             &nbsp;&nbsp;<b>{{ detail.user_name }}</b> &nbsp;&nbsp;<i>{{ detail.date }}</i></p>
    </div>

    <div>
        <div class="flex gap-2 border-b-[1px] py-4 flex-wrap">
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
             <br>
          <div class="detail">
            <img :src="detail.image" style="width: 700px;height: 600px;">
            <p class="text-2xl" style="display: flex;flex-direction: column;justify-content: center;align-items: baseline;     margin-bottom: 300px;" v-html="detail.description"></p>
          </div>
        </div>
    </div>
</section>

   
</template>


<script setup>
// import { useLoading } from 'vue3-loading-overlay';
//     // Import stylesheet
//     import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from 'vue-router'
   const route = useRoute()

// const details = ref({});
const detail = ref([]);

const blog = () => {
  // let loader = useLoading();
  //   loader.show({ });
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
    // loader.hide()
};


onMounted(() => {
blog()
});

</script>


<style scoped>
.container{
  transform: translate(100px, 25px);

}
.detail{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
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