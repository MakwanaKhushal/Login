<template>
    <nav class="fixed top-0 z-50 w-full bg-slate-50		 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
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
                        <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-black">Octal
                            Infotech</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span class="self-center text-base	  border-b-2   whitespace-nowrap text-black"> {{$route.name}}</span>
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
                            <div class="flex  h-28 flex-col  flex-shrink-0 items-center justify-center px-3 shadow-sm border-b border-black/10"
                                role="none"><img class="h-10 w-10 rounded-full object-cover"
                                    src="http://octalinfotech.com/img/octal-logo.png" alt="Your Company" role="none">
                                <h1 class="text-slate-500 text-lg font-bold space-x-3" role="none">OCTAL INFOTECH</h1>
                            </div>
                            <ul class="py-3 text-justify" role="none">
                                <li>
                                    <button type="button" class="btn btn-" data-bs-toggle="modal" data-bs-target="#myModal">
                                        <a href="javascript:void(0)"
                                            class="block text-sm text-gray-700 font-bold text-decoration-none"
                                            id="headlessui-menu-item-6" role="menuitem" tabindex="-1"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                aria-hidden="true" class="w-6 h-6 inline-block mx-2">
                                                <path fill-rule="evenodd"
                                                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                                    clip-rule="evenodd"></path>
                                            </svg> Profile </a>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="btn btn-" data-bs-toggle="modal"
                                        data-bs-target="#ChangePassworld">
                                        <a href="javascript:void(0)"
                                            class="block  text-sm text-gray-700 font-bold text-decoration-none"
                                            id="headlessui-menu-item-7" role="menuitem" tabindex="-1"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                aria-hidden="true" class="w-6 h-6 inline-block mx-2">
                                                <path fill-rule="evenodd"
                                                    d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                                                    clip-rule="evenodd"></path>
                                            </svg> Change Password </a>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="btn btn-" @click="logout">
                                        <a href="/loginPage" class="block ml-3 text-sm text-gray-700 font-bold text-decoration-none "
                                            id="headlessui-menu-item-8" role="menuitem" tabindex="-1"><i class="fa-solid fa-arrow-right-from-bracket"></i> <span class="ml-3">Logout</span> </a>
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
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-slate-100		 border-r border-slate-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-slate-100		 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <router-link to="/admin/deshBoard" class="router-link">
                    <a href="#"  class="router-link-active router-link-exact-active group flex items-center text-sm gap-2  font-medium p-2 border-b border-gray-200 hover:no-underline hover:text-slate-400 hover:bg-slate-200 focus:bg-slate-100 active:bg-slate-100">
                            <i
                                class="fa-solid fa-gauge fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                            <span class="ms-3">Dashboard</span>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin/blog" class="router-link">
                    <a href="#" class="router-link-active router-link-exact-active group flex items-center text-sm gap-2 font-medium p-2 border-b border-gray-200 hover:no-underline hover:text-slate-400 hover:bg-slate-200 focus:bg-slate-100 active:bg-slate-100"    >
                            <i
                                class="fa-solid fa-blog fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                            <span class="ms-3">Blog</span>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin/tags" class="router-link">
                    <a href="#" class="router-link-active router-link-exact-active group flex items-center text-sm gap-1 font-medium p-2 border-b border-gray-200 hover:no-underline hover:text-slate-400 hover:bg-slate-200 focus:bg-slate-100 active:bg-slate-100"    >
                            <i
                                class="fa-solid fa-tag fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                            <span class="ms-3">Tags</span>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin/user" class="router-link">
                    <a href="#"
                        class="router-link-active router-link-exact-active group flex items-center text-sm gap-2 font-medium p-2 border-b border-gray-200 hover:no-underline hover:text-slate-400 hover:bg-slate-200 focus:bg-slate-100 active:bg-slate-100"    >
                            <i
                                class="fa-solid fa-user fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                            <span class="ms-3">User</span>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin/categories" class="router-link">
                    <a href="#"
                        class="router-link-active router-link-exact-active group flex items-center text-sm gap-2 font-medium p-2 border-b border-gray-200 hover:no-underline hover:text-slate-400 hover:bg-slate-200 focus:bg-slate-100 active:bg-slate-100"    >
                            <i
                                class="fa-solid fa-list fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                            <span class="ms-3">Categories</span>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin/contact-us" class="router-link">
                    <a href="#"
                        class="router-link-active router-link-exact-active group flex items-center text-sm gap-2 font-medium p-2 border-b border-gray-200 hover:no-underline hover:text-slate-400 hover:bg-slate-200 focus:bg-slate-100 active:bg-slate-100"    >
                            <i
                                class="fa-solid fa-address-book fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                            <span class="ms-3">contact</span>
                        </a>
                    </router-link>
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
