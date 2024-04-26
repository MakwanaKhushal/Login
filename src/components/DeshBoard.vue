
<template>
    <div class="sm:px-6 lg:mx-auto bg-white lg:px-8">
        <div class="py-6 md:flex md:items-center md:justify-between  lg:border-gray-200">
            <div class="min-w-0 flex-1">
                <div class="flex items-center"><img class="hidden h-16 w-16 rounded-full sm:block"
                        src="https://ims-api.octalinfotech.com/storage/images/1686053683.jpg" alt="">
                    <div>
                        <div class="flex items-center"><img class="h-16 w-16 rounded-full sm:hidden"
                                src="https://ims-api.octalinfotech.com/storage/images/1686053683.jpg" alt="">
                            <h1 class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">Good
                                Afternoon, Khushal Makwana</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 ">
        <div
            class="flex flex-wrap justify-between  px-8 py-3 bg-green-50 rounded-sm  border-b-4 border-green-500 p-4 shadow-lg transition-all duration-700 hover:scale-110">
            <a href="/student/complete-tasks" class="" style="text-decoration: none;">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-green-600 dark:text-white">
                    Blog</h5>
            </a>
            <h1 class="text-2xl font-semibold text-black">{{ count.blog }}</h1>
        </div>
        <div
            class="flex flex-wrap justify-between px-8 py-3 bg-green-50 rounded-sm  border-b-4 border-green-500 p-4 shadow-lg transition-all duration-700 hover:scale-110">
            <a href="/student/complete-tasks" class="" style="text-decoration: none;">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-green-600 dark:text-white">
                    Tags</h5>
            </a>
            <h1 class="text-2xl font-semibold text-black">{{ count.tag }}</h1>
        </div>
        <div href="#"
            class="flex flex-wrap justify-between px-8 py-3 bg-pink-50 rounded-sm  border-b-4 border-pink-500 p-4 shadow-lg transition-all duration-700 hover:scale-110">
            <a href="/student/attendances" class="" style="text-decoration: none;">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-pink-600 dark:text-white">
                    Users</h5>
            </a>
            <h1 class="text-2xl font-semibold text-black">{{ count.user }}</h1>
        </div>
        <div href="#"
            class="flex flex-wrap justify-between px-8 py-3 bg-yellow-50 rounded-sm  border-b-4 border-yellow-500 p-4 shadow-lg transition-all duration-700 hover:scale-110">
            <a href="/student/leaves" class="" style="text-decoration: none;">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-yellow-600 dark:text-white">
                    Categories</h5>
            </a>
            <h1 class="text-2xl font-semibold text-black">{{ count.category }}</h1>
        </div>
    </div>
</template>

<script setup>
import { useLoading } from 'vue3-loading-overlay';
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import axios from "axios";
import { ref } from "vue";

const count = ref('')
let loader = useLoading();
loader.show({});
let data = localStorage.getItem('user')
data = JSON.parse(data)
let token = data.token
axios.get("https://blog-api-dev.octalinfotech.com/api/dashboard", {
    headers: { Authorization: `Bearer ${token}` }
})
    .then((res) => {
        count.value = res.data.data
        console.log(res.data.data);
    })
    .catch((err) => {
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
