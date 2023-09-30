<template>
  <div>
    <!-- <button class="btn btn-danger mt-2" @click="add">CreatBlog</button> -->
    <div class="CreatBlog ">
    
      <div style="margin-right: 890px; margin-top: 20px">
        <h2><b class="text-3xl" style="     margin-right: 90px;  text-shadow: 0 0 2px; ">Blogs</b></h2>
      </div>

      <div>
        <Multiselect
          @change="selectedBlog"
          style="margin-left: 0; width: 300px; border: 1px solid"
          :options="status"
          :value="selectedStatus"
          placeholder="select status"
          :closeOnSelect="true"
          :clearOnSelect="true"
          class="w-[11rem] mt-4 mb-3"
        >
        </Multiselect>
      </div>
      <div>
        <router-link to="creatblog">
          <button class="btn btn-success mt-4 mb-3" style="background:#123ad3;">New blog <b>+</b></button>
        </router-link>
      </div>
    </div>
    <br><br>
    <div class="tablebox">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"><b>Title</b></th>
            <th scope="col" ><b>Name</b></th>
            <th scope="col"><b>Category</b></th>
            <!-- <th scope="col" ><b>Description</b></th> -->
            <th scope="col" ><b>Status</b></th>
            <th scope="col" ><b>Action</b></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in details" :key="data">
            <template v-if="data.status === selectedStatus || !selectedStatus">
              <td style="display: flex;justify-content: center;" >
             <div class="flex items-center">
             <div  class="h-11 w-11 ">
             <img  :src="data.image" alt="employee_img" class="h-11 w-11  rounded-full object-cover "></div>
             <div  class="ml-2">
             <div  class="font-medium text-gray-900">{{ data.user_name}}</div>
             <div  class="mt-1 text-gray-500">{{data.date}}</div></div></div>
              </td>
              <th>{{ data.title }}</th>
              <th>{{ data.category_name }}</th>
              <!-- <td data-v-7394c81b="" class="text-xs text-gray-900 font-normal px-6 py-3 break-words truncate cell-breakword">
              <p v-html="data.description" ></p>
              </td> -->
              <!-- <td></td> -->
              <td v-if="data.status == 0">
                <button class="btn btn-info" @click="changeStatus(data.id)">
                  Panding
                </button>
              </td>
              <td v-else> 
                <span  class="rounded-pill text-sm" :class=' data.status === 1 ? "green" : "red"'>{{
                  data.status === 1 ? "Publish" : "Unpublish"}}</span>
              </td>
              <td>
                <i
                  class="fa-solid fa-pen-to-square fa-xl pointer"
                  style="color: blue"
                  @click="edit(data.id)"
                ></i
                >&nbsp;
                <i
                  class="fa-solid fa-trash fa-xl pointer"
                  style="color: red"
                  @click="remove(data.id)"
                ></i>
                &nbsp;
                <router-link :to="'/blogdetails/'+data.id">
                <i class="fa-regular fa-eye fa-xl" style="color: #b3047;"></i>
                </router-link>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
     <div style="display: flex;
    justify-content: end;margin-right: 50px;">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link color" href="#" @click.prevent="getblog(currentPage - 1)">Previous</a></li>
                <li class="page-item" v-for="page in totalPage" :key="page"><a style="    background: rgb(240, 255, 255);" class="page-link"  @click.prevent="getblog(page)">{{page}}</a></li>
                <li class="page-item"><a class="page-link color" href="#" @click.prevent="getblog(currentPage + 1)"> Next</a></li>
            </ul>
        </nav>
    </div>
  </div>
</template>

<script setup>

 import { useLoading } from 'vue3-loading-overlay';
    // Import stylesheet
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

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
const detail = ref({})
const details = ref({});
const status = ref(["all", "Publish", "Unpublish"]);

const getblog = async () => {
   let loader = useLoading();
    loader.show({ 
        // Pass props by their camelCased names
  color: 'red',
  loader: 'Dots',
  width: 75,
  height: 75,
  backgroundColor: '#ffffff',
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
            loader.hide()
          },300) 
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
            toaster.show(res.data.message, {
              type: "success",
              position: "top-right",
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


table {
  width: 85%;
  transform: translate(230px, 0px);
}
.badge {
  color: rgb(0, 11, 109);
  background: rgb(190, 221, 221);
  border: 1px solid rgb(87, 87, 87);
  border-radius: 10px;
}
</style>
<style>
.cell-breakword{
word-break: break-all;
  max-width: 5px;
}
.cell-breakword:hover{
  word-break: break-all;
}
.pointer {
  cursor: pointer;
}
.green{
  background: rgb(210, 255, 210);
padding: 5px;
border: 1px solid rgb(0, 255, 0);
}
.red{
  background: rgb(255, 211, 211);
  padding: 5px;
border: 1px solid rgb(255, 0, 0);

}
.cell-breakword{
  word-break: break-all;word-wrap: break-word;
}
.color {
    background: gainsboro;
}
</style>
