<template>
  <!-- <div>
    <div class="CreatBlog">
      <div style="margin-right: 890px; margin-top: 20px">
        <h2>
          <b class="text-3xl" style="margin-right: 90px; text-shadow: 0 0 2px">Blogs</b>
        </h2>
      </div>

      
      <div>
        <router-link to="creatblog">
          <button class="btn btn-success mt-4 mb-3" style="background: #123ad3">
            New blog <b>+</b>
          </button>
        </router-link>
      </div>
    </div>
    <br /><br />
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg"></div>
  </div> -->

  <div>
    <div></div>
    <!-- <Multiselect @change="selectedBlog" style="margin-left: 0; width: 300px; border: 1px solid" :options="status"
      :value="selectedStatus" placeholder="select status" :closeOnSelect="true" :clearOnSelect="true"
      class="w-[11rem] mt-4 mb-3">
    </Multiselect> -->
  </div>
  <div class="items-center md:flex-row flex-col flex justify-end px-1.5 mb-2 relative">
    
    <div class="flex gap-8 md:flex-row flex-col" style="display: flex;justify-content: center;align-items: center;">
      <div class="absolute left-0 top-2 text-3xl">Blogs</div>
      <div class="dp__main dp__theme_light md:w-[12rem] w-[16rem]">
        <div aria-label="Datepicker input" role="textbox" aria-multiline="false" aria-disabled="false"
          aria-readonly="false">
            
          <div>
            <Multiselect @change="selectedBlog" style=" width: 200px; " :options="status"
              :value="selectedStatus" placeholder="select status" :closeOnSelect="true" :clearOnSelect="true"
              class=" mt-2 mb-3">
            </Multiselect>
          </div>
        </div>
        <!---->
      </div>
      <div>
        <router-link to="creatblog">
          <button type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Blog+</button>
        </router-link>
      </div>
    </div>
  </div>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Title</th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Category</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">discription</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="data in details" :key="data">
          <template v-if="data.status === selectedStatus || !selectedStatus">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div class="flex items-center">
                <div class="h-11 w-11">
                  <img :src="data.image" alt="employee_img" class="h-11 w-11 rounded-full object-cover" />
                </div>
                <div class="ml-2">
                  <div class="font-medium text-gray-900">
                    {{ data.user_name }}
                  </div>
                  <div class="mt-1 text-gray-500">{{ data.date }}</div>
                </div>
              </div>
            </th>
            <td class="px-6 py-4">
              {{ data.title }}
            </td>
            <td class="px-6 py-4">
              {{ data.category_name }}
            </td>
            <td class="px-6 py-4" v-if="data.status == 0">
              <button class="btn btn-info" @click="changeStatus(data.id)">
                Panding
              </button>
            </td>
            <td class="px-6 py-4" v-else>
              <span class="rounded-pill text-sm" :class="data.status === 1 ? 'green' : 'red'">{{ data.status === 1 ?
                "Publish" : "Unpublish" }}</span>
            </td>
            <td class="px-6 py-4">
              <p v-html="data.description"></p>
            </td>
            <td class="px-6 py-4">
              <i class="fa-solid fa-pen-to-square fa-xl pointer" style="color: blue" @click="edit(data.id)"></i>&nbsp;
              <i class="fa-solid fa-trash fa-xl pointer" style="color: red" @click="remove(data.id)"></i>&nbsp;
              
              <router-link :to="'/blogdetails/' + data.id">
                <i class="fa-regular fa-eye fa-xl" style="color: #b3047"></i>
              </router-link>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
  <br />
  <div style="display: flex; justify-content: end">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link color" href="#" @click.prevent="getblog(currentPage - 1)">Previous</a>
        </li>
        <li class="page-item" v-for="page in totalPage" :key="page">
          <a style="background: rgb(240, 255, 255)" class="page-link" @click.prevent="getblog(page)">{{ page }}</a>
        </li>
        <li class="page-item">
          <a class="page-link color" href="#" @click.prevent="getblog(currentPage + 1)">
            Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
// import { toast } from 'vue3-toastify';
import { useToast } from "vue-toastification";

const toast = useToast();

import { useLoading } from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

import Multiselect from "@vueform/multiselect";
import axios from "axios";
import { ref } from "vue";
import { createToaster } from "@meforma/vue-toaster";
import { useRouter } from "vue-router";
import { inject, onMounted } from "vue";
const swal = inject("$swal");
const router = useRouter();
const totalPage = ref(1);
const currentPage = ref(1);

const toaster = createToaster({
  /* options */
});
const selectedStatus = ref("");
const detail = ref({});
const details = ref({});
const status = ref(["all", "Publish", "Unpublish"]);

const getblog = async () => {
  let loader = useLoading();
  loader.show({
    // Pass props by their camelCased names
    color: "red",
    loader: "Dots",
    width: 75,
    height: 75,
    backgroundColor: "#ffffff",
    opacity: 0.5,
    zIndex: 999,
  });
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  let token = user.token;
  await axios
    .get("https://blog-api-dev.octalinfotech.com/api/blogs?page=1&tag_id", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      // console.log(response);
      details.value = response.data.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  setTimeout(() => {
    loader.hide();
  }, 300);
};

const selectedBlog = (value) => {
  if (value === "Publish") selectedStatus.value = 1;
  if (value === "Unpublish") selectedStatus.value = 2;
  if (value === "all") selectedStatus.value = 0;
};

const remove = async (blogid) => {
  swal
    .fire({
      title: "Are you sure?",
      text: "Are you sure that you want to leave this page?",
      icon: "warning",
      dangerMode: true,
      confirm: true,
      cancelButtonColor: "red",
    })
    .then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        let token = user.token;
        // console.log(blogid);

        axios
          .delete(
            `https://blog-api-dev.octalinfotech.com/api/blogs/${blogid}/delete`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            swal.fire("blog delete successfully!", "", "success");
            // console.log(res);
            toast.success(res.data.message, {
              timeout: 4000,
            });
          });
        // getblog().catch((error) => {
        //   console.log(error);
        // });
      } else if (result.isDenied) {
        console.log("deni");
      }
    });
};

const changeStatus = (blogid) => {
  swal({
    title: "Approved?",
    text: "Are you want to really approved this record!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Publish",
    confirmButtonColor: "#00A300",
    cancelButtonText: "Unpublish",
    cancelButtonColor: "#FF0000",
    reverseButtons: true,
  }).then((res) => {
    console.log(res);
    let data = localStorage.getItem("user");
    data = JSON.parse(data);
    let token = data.token;
    console.log(token);

    let status = res.isConfirmed ? 1 : 2;
    console.log(status);

    axios
      .post(
        `https://blog-api-dev.octalinfotech.com/api/blogs/${blogid}/publish`,
        { status: status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        toaster.show(res.data.message, {
          type: "success",
          position: "top-right",
        });
        swal({
          title: "publish",
          text: "successfully publish",
          icon: "success",
          confirmButtonColor: "#00A300",
          reverseButtons: true,
        });

        getblog();
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
const blog = () => {
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
};

const edit = (id) => {
  console.log(id);
  router.push({
    name: "EditBlog",
    params: { id: id },
  });
};

onMounted(() => {
  getblog();
  blog();
});
</script>
<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
.CreatBlog {
  display: flex;
  justify-content: end;
  align-items: baseline;
  gap: 45px;
  margin-right: 5%;
  display: flex;
  justify-content: end;
  align-items: center;
}

.badge {
  color: rgb(0, 11, 109);
  background: rgb(190, 221, 221);
  border: 1px solid rgb(87, 87, 87);
  border-radius: 10px;
}
</style>
<style>
.cell-breakword {
  word-break: break-all;
  max-width: 5px;
}

.cell-breakword:hover {
  word-break: break-all;
}

.pointer {
  cursor: pointer;
}

.green {
  background: rgb(210, 255, 210);
  box-shadow: 6px 3px 8px;

  padding: 5px;
  border: 1px solid rgb(0, 255, 0);
}

.red {
  background: rgb(255, 211, 211);
  box-shadow: 6px 3px 8px;

  padding: 5px;
  border: 1px solid rgb(255, 0, 0);
}

.cell-breakword {
  word-break: break-all;
  word-wrap: break-word;
}

.color {
  background: gainsboro;
}
</style>
