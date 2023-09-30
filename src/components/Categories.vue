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
                <div class="modal-body">
                    <div style="display: flex;"><label for="fname"><b>Name :</b></label></div>
                    <input class="modalinput" type="text" id="fname" name="firstname" placeholder="Your name.." v-model="name">
                    <div style="display: flex;"><label for="fname"><b>Image :</b></label></div>
                    <input class="modalinput" type="file" @change="addImage">
                    <img :src="url" alt="" style="width:50%;">
                </div>
                <div class="modal-footer">
                    <button type="button" class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md" data-bs-dismiss="modal" @click="add">Save </button>
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
                    <div style="display: flex;"><label for="fname"><b>Name :</b></label></div>
                    <input class="modalinput" type="text" id="fname" name="firstname" v-model="update.name">
                    <div style="display: flex;"><label for="fname"><b>Image :</b></label></div>
                    <input class="modalinput" type="file" @change="addImage">
                    <img :src="url" alt="" style="width:50%;">
                </div>
                <div class="modal-footer">
                    <button type="button" class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md" data-bs-dismiss="modal" @click="edit">Update changes</button>
                </div>
            </div>
        </div>
    </div>
</div>
 
    
    
   
        <div style="display: flex; justify-content: space-between;margin-right: 7%;">
            <div class="user"> Categories</div>

              <button type="button" class="btn  mt-2 mb-3" style="background: #123ad3; color:white;" data-bs-toggle="modal" data-bs-target="#exampleModal">
                New Categories
            </button>

        </div>
<table class="table">
    <thead>
        <tr>
            <th scope="col"><b>Image</b></th>
            <th scope="col"><b>Name</b></th>
            <th><b>Action</b></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="api in data" :key="api" scope="row">
            <td style="width: 40%;"><img :src="api.image" style=" width:70px;height:55px; border-radius: 50px;"></td>
            <td>{{api.name }}</td>
            <td>
                <i class="fa-solid fa-pen-to-square fa-xl pointer" data-bs-toggle="modal" data-bs-target="#exampleModal2" style="color: blue;" @click="update=api"></i>&nbsp;&nbsp;
                <i class="fa-solid fa-trash fa-xl pointer" style="color: red;" @click="remove(api.id)"></i>
            </td>
        </tr>
    </tbody>
</table>
<div style="display: flex;
    justify-content: end;margin-right: 50px;">
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link style" href="#" @click.prevent="getCatagaris(currentPage - 1)">Previous</a></li>
            <li class="page-item" v-for="page in totalPage" :key="page"><a class="page-link  color" href="#" @click.prevent="getCatagaris(page)">{{page}}</a></li>
            <li class="page-item"><a class="page-link style" href="#" @click.prevent="getCatagaris(currentPage + 1)"> Next</a></li>
        </ul>
    </nav>
</div>
</template>

<script>
 import { useLoading } from 'vue3-loading-overlay';
    // Import stylesheet
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import axios from 'axios';
export default {
    name: 'HelloWorld',

    data() {
        return {
            value: null,
            options: [
                'Batman',
                'Robin',
                'Joker',
            ],
            data: {},
            name: "",
            update: '',
            image: '',
            file: '',
            page: '',
            totalPage: 1,
            currentPage: 1,
            url: '',

        };
    },
    methods: {
        addImage(event) {
            console.log(123);
            this.file = event.target.files[0];
            this.url = URL.createObjectURL(this.file);
            console.log(event.target.files[0]);
        },

        edit() {

            let user = localStorage.getItem("user");
            user = JSON.parse(user)
            let token = user.token

            let formData = new FormData();
            formData.append('name', this.update.name)
            formData.append('image', this.file)

            axios.post(`https://blog-api-dev.octalinfotech.com/api/categories/${this.update.id}/update`, formData, {
                    'headers': {
                        'Authorization': `Bearer ${token}`

                    }
                })
                .then((res) => {
                    console.log(res);
                      this.$toast.show(res.data.message, {
                        type: "success",
                        position: "top-right",
                    });
                    this.$swal(res.data.message);
                    this.getCatagaris()
                })
                .catch((error) => {
                    console.log(error);
                })

        },
        getCatagaris(page = 1) {
             let loader = useLoading();
            loader.show({ });
            if (page <= this.totalPage && page > 0) {
                this.currentPage = page;
            } else if (this.totalPage !== 1) {
                return;
            }

            let user = localStorage.getItem("user");
            user = JSON.parse(user)
            let token = user.token
            // console.log(token);

            axios.get("https://blog-api-dev.octalinfotech.com/api/categories?page=" + page, {
                    'headers': {
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then((res) => {
                    // console.log(res);
                    // console.log(res.data.data.data);
                    this.data = res.data.data.data
                }).catch((error) => {
                    console.log(error);
                })
                 loader.hide()
        },
        add() {
            if (!this.name) {
                alert("input field is empty")
            }

            let user = localStorage.getItem("user");
            user = JSON.parse(user)
            let token = user.token

            let formData = new FormData();
            formData.append('name', this.name)
            formData.append('image', this.file)

            axios.post("https://blog-api-dev.octalinfotech.com/api/categories/store", formData, {

                    'headers': {
                        'Authorization': `Bearer ${token}`
                    },

                })
                .then((res) => {
                    console.log(res);
                    this.$toast.show(res.data.message, {
                        type: "success",
                        position: "top-right",
                    });
                    this.$swal(res.data.message);

                    this.getCatagaris()
                })
                .catch((error) => {
                    console.log(error);
                })

        },
        remove(studentid) {
            if (confirm('Are you sure, you want to delet this data?')) {

                let user = localStorage.getItem("user");
                user = JSON.parse(user)
                let token = user.token
                console.log(studentid);
                axios.delete(`https://blog-api-dev.octalinfotech.com/api/categories/${studentid}/delete`, {
                        'headers': {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    .then((res) => {
                        console.log(res);
                        this.getCatagaris()
                        this.$toast.show(res.data.message, {
                            type: "success",
                            position: "top-right",
                        });
                        this.$swal(res.data.message);

                    })
                    .catch((error) => {
                        console.log(error);
                    })

            }

        },

    },
    mounted() {
        this.getCatagaris()
    },
}
</script>

<style scoped>
#customers td,
#customers th {
    border: 1px solid #ddd;
    padding: 8px;
}
</style>
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

.modal-content {
    border-radius: 20px;
}

img {
    display: initial;

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