<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Creat +</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="p-4 md:p-5">
                        <form class="space-y-4" action="#">
                            <div>
                                <label for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Your email</label>
                                <input v-model="name" type="email" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="name@company.com" required>
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Image :</label>
                                <input @change="addImage" type="file" name="password" id="password" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required>
                                <img :src="url" alt="" style="width: 50%" />
                            </div>

                        </form>
                    </div>
                    <!-- <div class="modal-body">
                        <div style="display: flex">
                            <label for="fname"><b>Name :</b></label>
                        </div>
                        <input class="modalinput" type="text" id="fname" name="firstname" placeholder="Your name.."
                            v-model="name" />
                        <div style="display: flex">
                            <label for="fname"><b>Image :</b></label>
                        </div>
                        <input class="modalinput" type="file" @change="addImage" />
                        <img :src="url" alt="" style="width: 50%" />
                    </div> -->
                    <div class="modal-footer">
                        <button type="button"
                            class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md"
                            data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button"
                            class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md"
                            data-bs-dismiss="modal" @click="add">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal update -->

        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div style="display: flex">
                            <label for="fname"><b>Name :</b></label>
                        </div>
                        <input class="modalinput" type="text" id="fname" name="firstname" v-model="update.name" />
                        <div style="display: flex">
                            <label for="fname"><b>Image :</b></label>
                        </div>
                        <input class="modalinput" type="file" @change="addImage" />
                        <img :src="url" alt="" style="width: 50%" />
                    </div>
                    <div class="modal-footer">
                        <button type="button"
                            class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md"
                            data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button"
                            class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md"
                            data-bs-dismiss="modal" @click="edit">
                            Update changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <div style="display: flex; justify-content: space-between; margin-right: 7%">
        <div class="user">Categories</div>

        <button type="button" class="btn mt-2 mb-3" style="background: #123ad3; color: white" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            New Categories
        </button>
    </div> -->

    <div class="flex gap-5 flex-wrap lg:justify-between md:justify-between justify-center items-center">
        <div>
            <div
                class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-slate-100 overflow-hidden">
                <div class="grid place-items-center h-full w-12"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" aria-hidden="true" class="h-5 text-gray-300">
                        <path fill-rule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clip-rule="evenodd"></path>
                    </svg></div><input @search="handleSearchStudent"
                    class="peer h-full w-full outline-none text-sm bg-slate-100 text-gray-700 bg-s pr-2 border-none"
                    type="text" id="search" placeholder="Search something..">
            </div>
        </div> <button type="button"
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        data-bs-toggle="modal" data-bs-target="#exampleModal">
        New Categories
    </button>
    </div>
    <br>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">Image</th>
                    <th scope="col" class="px-6 py-3">Name</th>
                    <th scope="col" class="px-6 py-3">Action</th>


                </tr>
            </thead>
            <tbody v-if="data && data.length>0">
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    v-for="api in data" :key="api">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img :src="api.image" style="width: 70px; height: 55px; border-radius: 50px" />
                    </th>
                    <td class="px-6 py-4">
                        {{ api.name }}
                    </td>
                    <td class="px-6 py-4">
                        <i class="fa-solid fa-pen-to-square fa-xl pointer" data-bs-toggle="modal"
                            data-bs-target="#exampleModal2" style="color: blue" @click="update = api"></i>&nbsp;&nbsp;
                        <i class="fa-solid fa-trash fa-xl pointer" style="color: red" @click="remove(api.id)"></i>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="11" class="text-center min-w-full h-12 text-2xl font-semibold">No matching records found</td>
                </tr>
            </tbody>
        </table>
        
    </div>
    <br>
    <div style="display: flex; justify-content: end; ">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link style" href="#" @click.prevent="getCatagaris(currentPage - 1)">Previous</a>
                </li>
                <li class="page-item" v-for="page in totalPage" :key="page">
                    <a class="page-link color" href="#" @click.prevent="getCatagaris(page)">{{ page }}</a>
                </li>
                <li class="page-item">
                    <a class="page-link style" href="#" @click.prevent="getCatagaris(currentPage + 1)">
                        Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { useLoading } from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import axios from "axios";
export default {
    name: "HelloWorld",

    data() {
        return {
            value: null,
            options: ["Batman", "Robin", "Joker"],
            data: {},
            name: "",
            update: "",
            image: "",
            file: "",
            page: "",
            totalPage: 1,
            currentPage: 1,
            url: "",
        };
    },
    methods: {
        handleSearchStudent(value) {
            this.search = value;
            this.page = 1
            this.getCatagaris(this.search,this.page,this.student_id,this.status);
        },
        addImage(event) {
            console.log(123);
            this.file = event.target.files[0];
            this.url = URL.createObjectURL(this.file);
            console.log(event.target.files[0]);
        },

        edit() {
            let user = localStorage.getItem("user");
            user = JSON.parse(user);
            let token = user.token;

            let formData = new FormData();
            formData.append("name", this.update.name);
            formData.append("image", this.file);

            axios
                .post(
                    `https://blog-api-dev.octalinfotech.com/api/categories/${this.update.id}/update`,
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
                .then((res) => {
                    console.log(res);
                    this.$toast.show(res.data.message, {
                        type: "success",
                        position: "top-right",
                    });
                    this.$swal(res.data.message);
                    this.getCatagaris();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getCatagaris(page = 1) {
            let loader = useLoading();
            loader.show({});
            if (page <= this.totalPage && page > 0) {
                this.currentPage = page;
            } else if (this.totalPage !== 1) {
                return;
            }

            let user = localStorage.getItem("user");
            user = JSON.parse(user);
            let token = user.token;
            // console.log(token);

            axios
                .get(
                    "https://blog-api-dev.octalinfotech.com/api/categories?page=" + page,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
                .then((res) => {
                    // console.log(res);
                    // console.log(res.data.data.data);
                    this.data = res.data.data.data;
                })
                .catch((error) => {
                    console.log(error);
                });
            setTimeout(() => {
                loader.hide();
            }, 150);
        },
        add() {
            if (!this.name) {
                alert("input field is empty");
            }

            let user = localStorage.getItem("user");
            user = JSON.parse(user);
            let token = user.token;

            let formData = new FormData();
            formData.append("name", this.name);
            formData.append("image", this.file);

            axios
                .post(
                    "https://blog-api-dev.octalinfotech.com/api/categories/store",
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
                .then((res) => {
                    console.log(res);
                    this.$toast.show(res.data.message, {
                        type: "success",
                        position: "top-right",
                    });
                    this.$swal(res.data.message);

                    this.getCatagaris();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        remove(studentid) {
            if (confirm("Are you sure, you want to delet this data?")) {
                let user = localStorage.getItem("user");
                user = JSON.parse(user);
                let token = user.token;
                console.log(studentid);
                axios
                    .delete(
                        `https://blog-api-dev.octalinfotech.com/api/categories/${studentid}/delete`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    )
                    .then((res) => {
                        console.log(res);
                        this.getCatagaris();
                        this.$toast.show(res.data.message, {
                            type: "success",
                            position: "top-right",
                        });
                        this.$swal(res.data.message);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
    },
    mounted() {
        this.getCatagaris();
    },
};
</script>
<style>.style {
    background: gainsboro;
}

.color {
    background: rgb(240, 255, 255);
}</style>
<style scoped>.user {

    display: flex;
    text-shadow: 0 0 1px;
    font-size: xx-large;
}

.user2 {
    display: contents;
}</style>
