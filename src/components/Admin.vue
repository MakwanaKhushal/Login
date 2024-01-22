<template>
    <nav class="fixed top-0 z-50 w-full bg-zinc-200		 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-2 py-2 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start rtl:justify-end">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
                        type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                            </path>
                        </svg>
                    </button>
                    <a href="https://flowbite.com" class="flex ms-2 md:me-24">
                        <img src="http://octalinfotech.com/img/octal-logo.png" class="h-8 me-3 rounded-s-md"
                            alt="FlowBite Logo" />
                        <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Octal
                            Infotech</span>
                    </a>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center ms-3">
                        <div>
                            <button type="button"
                                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                <span class="sr-only">Open user menu</span>
                                <img class="w-12 h-12 rounded-full"
                                    src="https://ca.slack-edge.com/T04HNPJ1PV3-U04HWPFL198-d20d9928ef55-512"
                                    alt="user photo" />
                            </button>
                        </div>
                        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                            id="dropdown-user">
                            <ul class="py-1" role="none">
                                <li>
                                    <button type="button" class="btn btn-" data-bs-toggle="modal" data-bs-target="#myModal">
                                        Profile
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="btn btn-" data-bs-toggle="modal"
                                        data-bs-target="#ChangePassworld">
                                        ChangePassworld
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="btn btn-" @click="logout">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-neutral-300		 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-neutral-300		 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <router-link to="/admin/deshBoard" class="router-link">
                            <i
                                class="fa-solid fa-gauge fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                            <span class="ms-3">Dashboard</span>
                        </router-link>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <router-link to="/admin/blog" class="router-link">
                            <i
                                class="fa-solid fa-blog fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                            <span class="ms-3">Blog</span>
                        </router-link>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <router-link to="/admin/tags" class="router-link">
                            <i
                                class="fa-solid fa-tag fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                            <span class="ms-3">Tags</span>
                        </router-link>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <router-link to="/admin/user" class="router-link">
                            <i
                                class="fa-solid fa-user fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                            <span class="ms-3">User</span>
                        </router-link>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <router-link to="/admin/categories" class="router-link">
                            <i
                                class="fa-solid fa-list fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                            <span class="ms-3">Categories</span>
                        </router-link>
                    </a>
                </li>
            </ul>
        </div>
    </aside>


        <div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <router-view></router-view>
             
            </div>
         </div>
         <!-- -------------------------- -->
    <Modal />
</template>

<script>
import Modal from "@/components/Modal";
export default {
    name: "SideBar",
    components: {
        Modal,
    },
    data() {
        return {
            Modal: false,
        };
    },

    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({
                name: "LoginPage",
            });
        },
    },
};
</script>

<style></style>
