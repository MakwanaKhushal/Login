
<template>
<br>

<div class="name ">
    <img src="https://ca.slack-edge.com/T04HNPJ1PV3-U04HWPFL198-417360c899fd-68" style="border-radius: 47%;" alt="">
    <h3> <b class="text-2xl">Good Morning, Khushal Makwana</b></h3>
</div>

<div style="display: flex; justify-content: center;gap: 30px;margin-top: 35px;" class="container ">
    <div data-v-cef1fb98="" class="flex flex-wrap justify-between gap-5 px-8 py-3 bg-yellow-100 rounded-sm shadow border-b-4 border-yellow-500" style="width: 20%;    box-shadow: 10px 10px 40px 10px #00000049;">
        <a data-v-cef1fb98="" href="/student/complete-tasks" class="" style="text-decoration: none">
            <h5 data-v-cef1fb98="" class="mb-2 text-2xl font-semibold tracking-tight text-yellow-600 dark:text-white">
                User
            </h5>
        </a>
        <h1 data-v-cef1fb98="" class="text-2xl font-semibold text-black">{{count.user}}</h1>
    </div>
    <div data-v-cef1fb98="" class="flex flex-wrap justify-between gap-5 px-8 py-3 bg-green-100 rounded-sm shadow border-b-4 border-green-500" style="width: 20%;">
        <a data-v-cef1fb98="" href="/student/complete-tasks" class="" style="text-decoration: none">
            <h5 data-v-cef1fb98="" class="mb-2 text-2xl font-semibold tracking-tight text-green-600 dark:text-white">
                Blogs
            </h5>
        </a>
        <h1 data-v-cef1fb98="" class="text-2xl font-semibold text-black">{{count.blog}}</h1>
    </div>
    <div data-v-cef1fb98="" class="flex flex-wrap justify-between gap-5 px-8 py-3 bg-red-100 rounded-sm shadow border-b-4 border-red-500" style="width: 20%;">
        <a data-v-cef1fb98="" href="/student/complete-tasks" class="" style="text-decoration: none">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-red-600 dark:text-white">
                Tags
            </h5>
        </a>
        <h1 data-v-cef1fb98="" class="text-2xl font-semibold text-black">{{count.tag}}</h1>
    </div>
    <div data-v-cef1fb98="" class="flex flex-wrap justify-between gap-5 px-8 py-3  bg-blue-100 rounded-sm shadow border-b-4 border-blue-500" style="width: 20%;">
        <a data-v-cef1fb98="" href="/student/complete-tasks" class="" style="text-decoration: none">
            <h5 data-v-cef1fb98="" class="mb-2 text-2xl font-semibold tracking-tight text-blue-600 dark:text-white">
                Categories
            </h5>
        </a>
        <h1 data-v-cef1fb98="" class="text-2xl font-semibold text-black">{{count.category}}</h1>
    </div>
</div>
</template>

<script setup>
 import { useLoading } from 'vue3-loading-overlay';
    // Import stylesheet
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import axios from "axios";
import { ref } from "vue";

const count =ref ('')
   let loader = useLoading();
    loader.show({ });
   let data = localStorage.getItem('user')
    data = JSON.parse(data)
  let  token = data.token
axios.get("https://blog-api-dev.octalinfotech.com/api/dashboard" ,{
      headers:{Authorization: `Bearer ${token}`}
})
      .then((res)=>{  
          count.value=res.data.data
          // console.log(res.data.data);
      })
      .catch((err)=>{
        console.log(err);
      })
       loader.hide()
</script>

<style scoped>
.name {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-left: -45%;
    margin-top: 45px;
}
</style>
