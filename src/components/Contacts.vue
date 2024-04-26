<template>
    <!-- <div class="row">
        <div class="col user">contacts</div>
        <div class="col user2">
            <button type="button"  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                New contact <b>+</b>
            </button>
            <div  class="flex  flex-wrap justify-between items-center">
                <div >
                    <div
                        class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-slate-100 overflow-hidden">
                        <div class="grid place-items-center h-full w-12"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true" class="h-5 text-gray-300">
                                <path fill-rule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clip-rule="evenodd"></path>
                            </svg></div><input
                            class="peer h-full w-full outline-none text-sm bg-slate-100 text-gray-700 bg-s pr-2 border-none"
                            type="text" id="search" placeholder="Search something..">
                    </div>
                </div>
            </div>
        </div>
      
    </div>
   -->
    <div  class="flex gap-2 flex-wrap justify-between items-center">
        <div >
            <div
                class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-slate-100 overflow-hidden">
                <div class="grid place-items-center h-full w-12"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" aria-hidden="true" class="h-5 text-gray-300">
                        <path fill-rule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clip-rule="evenodd"></path>
                    </svg></div><input
                    class="peer h-full w-full outline-none text-sm bg-slate-100 text-gray-700 bg-s pr-2 border-none"
                    type="text" id="search" placeholder="Search something..">
            </div>
        </div>
    </div>
    <br>
    <!-- ======================================================================= -->
    <div class="relative  overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">name</th>
                    <th scope="col" class="px-6 py-3">Email</th>
                    <th scope="col" class="px-6 py-3">Message</th>
                    <!-- <th scope="col" class="px-6 py-3">Action</th> -->
                </tr>
            </thead>
            <tbody v-if="data && data.length>0">
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="api in data" :key="api">
                    <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ api.name }}
                    </th>
                    <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ api.email }}
                    </th>
                    <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ api.message }}
                    </th>
                    <!-- <td class="px-6 py-4">
                        <i class="fa-solid fa-pen-to-square fa-xl pointer" style="color: blue" data-bs-toggle="modal"
                            data-bs-target="#exampleModal2" @click="update = api"></i>&nbsp;&nbsp;&nbsp;
                        <i class="fa-solid fa-trash fa-xl pointer" style="color: red" @click="remove(api.id)"></i>
                    </td> -->
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="11" class="text-center min-w-full h-12 text-2xl font-semibold">No matching records found</td>
                </tr>
            </tbody>
        </table>
    </div>
    <br />
    <div style="display: flex; justify-content: end">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link style" href="#" @click.prevent="getcontact(currentPage - 1)">Previous</a>
                </li>
                <li class="page-item" v-for="page in totalPage" :key="page">
                    <a class="page-link color" href="#" @click.prevent="getcontact(page)">{{
                        page
                    }}</a>
                </li>
                <li class="page-item">
                    <a class="page-link style" href="#" @click.prevent="getcontact(currentPage + 1)">
                        Next</a>
                </li>
            </ul>
        </nav>
    </div>
    <!-- ======================================================================= -->
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add data</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div style="display: flex">
                        <label for="fname"><b>Name :</b></label>
                    </div>
                    <input class="modalinput" type="text" id="fname" placeholder="Your name.." v-model="name" />
                    <div style="display: flex">
                        <label for="fname"><b>Email :</b></label>
                    </div>
                    <input class="modalinput" type="text" id="fname" placeholder="Your name.." v-model="email" />
                    <div style="display: flex">
                        <label for="fname"><b>password :</b></label>
                    </div>
                    <input class="modalinput" type="text" id="fname" placeholder="Your name.." v-model="password" />
                </div>
                <div class="modal-footer">
                    <button type="button"
                        class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md"
                        data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button"
                        class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md"
                        data-bs-dismiss="modal" @click="add">
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div>
            <!-- <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Creat +
            </button> -->
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Update User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div style="display: flex">
                            <label for="fname">
                                <h3><b class="text-1xl">Name :</b></h3>
                            </label>
                        </div>
                        <input class="modalinput" type="text" id="fname" name="firstname" placeholder="Your name.."
                            v-model="update.name" />

                        <div style="display: flex">
                            <label for="fname">
                                <h3><b class="text-1xl">Email :</b></h3>
                            </label>
                        </div>
                        <input class="modalinput" type="text" id="fname" name="firstname" placeholder="Your name.."
                            v-model="update.email" />

                        <div style="display: flex">
                            <label for="fname">
                                <h3><b class="text-1xl">Password :</b></h3>
                            </label>
                        </div>
                        <input class="modalinput" type="text" id="fname" name="firstname" placeholder="Your name.."
                            v-model="update.password" />
                    </div>
                    <div class="modal-footer">
                        <button
                            class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md"
                            data-bs-dismiss="modal">
                            Close
                        </button>
                        <button
                            class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md"
                            data-bs-dismiss="modal" @click="edit">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue";
import { useLoading } from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import axios from "axios";
import { ref, onMounted } from "vue";
import { createToaster } from "@meforma/vue-toaster";
// import Result from 'postcss/lib/result';

const swal = inject("$swal");

const toaster = createToaster({
    /* options */
});

// const search = ref({});
const data = ref({});
const name = ref("");
// const page = ref('');
const totalPage = ref(1);
const currentPage = ref(1);
// const user = ref(null);
const update = ref({});
const email = ref({});
const password = ref("");

const edit = () => {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    let token = user.token;

    let data = {
        name: name.value,
        email: email.value,
        password: password.value,
    };

    axios
        .post(
            `https://blog-api-dev.octalinfotech.com/api/contact-us/${update.value.id}/update`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((res) => {
            console.log(res);
            getcontact();
            toaster.show(res.data.message, {
                type: "success",
                position: "top-right",
            });
            swal.fire({
                icon: "success",
                title: res.data.message,
            });
        })

        .catch((error) => {
            console.log(error);
        });
};
// const remove = (studentid) => {
//     let user = localStorage.getItem("user");
//     user = JSON.parse(user);
//     let token = user.token;

//     swal
//         .fire({
//             title: "Are you sure?",
//             text: "Are you sure that you want to leave this page?",
//             icon: "warning",
//             dangerMode: true,
//         })
//         .then((result) => {
//             if (result.isConfirmed) {
//                 axios
//                     .delete(
//                         `https://blog-api-dev.octalinfotech.com/api/contact-us/${studentid}/delete`,
//                         {
//                             headers: {
//                                 Authorization: `Bearer ${token}`,
//                             },
//                         }
//                     )
//                     .then(() => {
//                         swal.fire("Tag Deleted successfully!", "", "success");
//                         getTags();
//                     })
//                     .catch((err) => {
//                         console.log(err);
//                     });
//             }
//         });
// };

const getcontact = (page = 1 ) => {
    let loader = useLoading();
    loader.show({});
    if (page <= totalPage.value && page > 0) {
        currentPage.value = page;
    } else if (totalPage.value !== 1) {
        return;
    }
    // console.log(132362);
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    let token = user.token;
    axios
        .get(`https://blog-api-dev.octalinfotech.com/api/contact-us/index?page=${page}&per_page=10&search=`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            console.log(res);
            totalPage.value = res.data.data.last_page;
            data.value = res.data.data.data;
            user = res.data.data.data;
        });
    loader.hide();
};
const add = () => {
    if (!name.value) {
        alert("input field is empty");
    }
    let data = {
        name: name.value,
        email: email.value,
        password: password.value,
    };
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    let token = user.token;
    axios
        .post("https://blog-api-dev.octalinfotech.com/api/contact-us/store", data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            console.log(res);
            getcontact();
            toaster.show(res.data.message, {
                type: "success",
                position: "top-right",
            });
            swal.fire({
                icon: "success",
                title: res.data.message,
            });
        })
        .catch((error) => {
            toaster.show(error, {
                type: "success",
                position: "top-right",
            });
            // console.log(error);
        });
};

onMounted(() => {
    getcontact();
});
</script>

<style scoped>.user {

    display: flex;
    text-shadow: 0 0 1px;
    font-size: xx-large;
}

.user2 {
    display: contents;
}</style>