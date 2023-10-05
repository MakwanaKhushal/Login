<template>
<div class="d-flex  flex-column ">
    <!-- Button trigger modal -->
    <div>
     

        <div style="display: flex; justify-content: space-between;margin-right: 7%;">
             <div class="user">User</div>
            <button type="button" class="btn  mt-2 mb-3" style="background: #123ad3;color:white;" data-bs-toggle="modal" data-bs-target="#exampleModal">
                New User <b>+</b>
            </button>
            
        </div>
       
  <div>
    <table class="table">

        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col"> <b>User</b></th>
                <th scope="col"><b>Email</b></th>
                <th scope="col"><b>Action</b></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="api in data" :key="api">
                <th scope="row"></th>
                <td >{{api.name}}</td>
                <td >{{api.email}}</td>
                <td >
                    <i class="fa-solid fa-pen-to-square fa-xl pointer" style="color: blue;" data-bs-toggle="modal" data-bs-target="#exampleModal2" @click="update=api"></i>&nbsp;&nbsp;&nbsp;
                    <i class="fa-solid fa-trash fa-xl pointer" style="color: red;" @click="remove(api.id)"></i>
                </td>
            </tr>

        </tbody>
    </table>
  </div>
    <div style="display: flex;
    justify-content: end;margin-right: 50px;">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link style" href="#" @click.prevent="getTags(currentPage - 1)">Previous</a></li>
                <li class="page-item" v-for="page in totalPage" :key="page"><a class="page-link  color" href="#" @click.prevent="getTags(page)">{{page}}</a></li>
                <li class="page-item"><a class="page-link style" href="#" @click.prevent="getTags(currentPage + 1)"> Next</a></li>
            </ul>
        </nav>
    </div>
</div>


<div>

</div>

 <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add data</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div style="display: flex;"><label for="fname"><b>Name :</b></label></div>
                        <input class="modalinput" type="text" id="fname" placeholder="Your name.." v-model="name">
                        <div style="display: flex;"><label for="fname"><b>Email :</b></label></div>
                        <input class="modalinput" type="text" id="fname"  placeholder="Your name.." v-model="email">
                        <div style="display: flex;"><label for="fname"><b>password :</b></label></div>
                        <input class="modalinput" type="text" id="fname" placeholder="Your name.." v-model="password">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md" data-bs-dismiss="modal" @click="add">Save changes</button>
                    </div>
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
                        <div style="display: flex;"><label for="fname"><h3><b class="text-1xl	">Name :</b></h3></label></div>
                        <input class="modalinput" type="text" id="fname" name="firstname" placeholder="Your name.." v-model="update.name">
                        
                        <div style="display: flex;"><label for="fname"><h3><b class="text-1xl	">Email :</b></h3></label></div>
                        <input class="modalinput" type="text" id="fname" name="firstname" placeholder="Your name.." v-model="update.email">
                        
                        <div style="display: flex;"><label for="fname"><h3><b class="text-1xl	">Password :</b></h3></label></div>
                        <input class="modalinput" type="text" id="fname" name="firstname" placeholder="Your name.." v-model="update.password">
                    </div>
                    <div class="modal-footer">
                        <button  class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md" data-bs-dismiss="modal">Close</button>
                        <button class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md"  data-bs-dismiss="modal"  @click="edit">
                        Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 

<script setup>
import {inject} from 'vue'
 import { useLoading } from 'vue3-loading-overlay';
    // Import stylesheet
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import axios from 'axios';
import { ref, onMounted } from 'vue'
import { createToaster } from "@meforma/vue-toaster";
// import Result from 'postcss/lib/result';

const swal = inject('$swal')

const toaster = createToaster({ /* options */ });

        const data = ref({});
        const name = ref('');
        // const page = ref('');
        const totalPage = ref(1);
        const currentPage = ref(1);
        // const user = ref(null);
        const update = ref({});
        const email= ref({});
        const password= ref('')


        const edit=()=> {

            let user = localStorage.getItem("user");
            user = JSON.parse(user)
            let token = user.token

            let data = {
                 name: name.value,
                email: email.value,
                password:password.value
            }

            axios.post(`https://blog-api-dev.octalinfotech.com/api/users/${update.value.id}/update`, data, {
                    'headers': {
                        'Authorization': `Bearer ${token}`

                    }
                })
                .then((res) => {

                    console.log(res);
                      getTags()
                        toaster.show(res.data.message, {
                        type: "success",
                        position: "top-right",
                    });
                     swal.fire({
                            icon: 'success',
                            title: res.data.message,
                            })
                })
                
                .catch((error) => {
                    console.log(error);
                })

        }
       const remove=(studentid) =>{
        
                let user = localStorage.getItem("user");
                user = JSON.parse(user)
                let token = user.token
            
                            swal.fire({
                title: "Are you sure?",
                text: "Are you sure that you want to leave this page?",
                icon: "warning",
                dangerMode: true,
                })
            .then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`https://blog-api-dev.octalinfotech.com/api/users/${studentid }/delete`,{
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then(() => {
             swal.fire("Tag Deleted successfully!", "", "success");
             getTags();
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
    }

       const getTags = (page = 1) =>{
          let loader = useLoading();
            loader.show({ });
            if (page <= totalPage.value && page > 0) {
                currentPage.value = page;
            } else if ( totalPage.value !== 1) {
                return;
            }
        // console.log(132362);
            let user = localStorage.getItem("user");
            user = JSON.parse(user)
            let token = user.token
            axios.get("https://blog-api-dev.octalinfotech.com/api/users?page=" + page, {
                    'headers': {
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then((res) => {
                     totalPage.value  = res.data.data.last_page
                    data.value = res.data.data.data
                    user = res.data.data.data
                })
                loader.hide()
        }
      const  add=() =>{
            if (!name.value) {
                alert("input field is empty")
            }
            let data = {
                name: name.value,
                email: email.value,
                password:password.value
            }
            let user = localStorage.getItem("user");
            user = JSON.parse(user)
            let token = user.token
            axios.post("https://blog-api-dev.octalinfotech.com/api/users/store", data, {

                    'headers': {
                        'Authorization': `Bearer ${token}`
                    },

                })
                .then((res) => {
                    console.log(res);
                     getTags()
                    toaster.show(res.data.message, {
                        type: "success",
                        position: "top-right",
                    });
                       swal.fire({
                            icon: 'success',
                            title: res.data.message,
                            })

                })
                .catch((error) => {
                    toaster.show(error, {
                        type: "success",
                        position: "top-right",
                    });
                    // console.log(error);
                })

        }

        onMounted(() => {
            getTags()
        })
       
    
</script>

<style scoped>
.style {
    background: gainsboro;
}

.color {
    background: rgb(240, 255, 255);
}

.modalinput {
    width: 100%;
    border: 2px solid;
    border-radius: 5px;
}
.modal-content{
    border-radius: 20px;
}
table {
    width: 85%;
    transform: translate(260px, 0px);
    border-collapse: collapse;
}
</style>
<style scoped>
  .user{
        justify-content: start;
    display: flex;
    margin-left: 243px;
    margin-top: 11px;
  justify-content: start;
  font-size: 27px;
  font-weight: 800;
  text-shadow: 0 0 2px;
}  
</style>