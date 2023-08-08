<template>
<div class="d-flex  flex-column ">
    <!-- Button trigger modal -->
    <div>
        <div style="    display: flex;
    justify-content: end;
    margin-right: 100px;">

            <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Creat +
            </button>

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
                        <input class="modalinput" type="text" id="fname" name="firstname" placeholder="Your name.." v-model="name">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="add">Save changes</button>
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
                        <h5 class="modal-title" id="exampleModalLabel">Update data</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div style="display: flex;"><label for="fname"><b>Name :</b></label></div>
                        <input class="modalinput" type="text" id="fname" name="firstname" placeholder="Your name.." v-model="update.name">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="edit">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <table class="table">
        <!-- <button class="btn btn-primary">button</button> -->

        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="api in data" :key="api">
                <th scope="row"></th>
                <td>{{api.id}}</td>
                <td style="width: 1000px;">{{api.name}}</td>
                <td style="width: 400px;">
                    <i class="fa-solid fa-pen-to-square fa-xl" style="color: #78a5f2;" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                     @click="update=api"></i>&nbsp;&nbsp;&nbsp;
                    <i class="fa-solid fa-trash fa-xl" style="color: #c53a30;" @click="remove(api.id)"></i>
                </td>
            </tr>

        </tbody>
    </table>
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
</template>

<script>
import axios from 'axios';
export default {
    name: "TagsComponents",
    data() {
        return {
            data: {},
            name: "",
            page: '',
            totalPage: 1,
            currentPage: 1,
            user: null,
            update: '',
        };
    },

    methods: {
        edit() {

            let user = localStorage.getItem("data");
            user = JSON.parse(user)
            let token = user.token

            let data = {
                name: this.update
            }

            axios.get(`https://blog-api-dev.octalinfotech.com/api/tages/${this.update.id}/update`, data, {
                    'headers': {
                        'Authorization': `Bearer ${token}`

                    }
                })
                .then((res) => {
                    console.log(res);
                    this.getTags()

                })
                .catch((error) => {
                    console.log(error);
                })

        },
        remove(studentid) {
            if (confirm('Are you sure, you want to delet this data?')) {
                let user = localStorage.getItem("data");
                user = JSON.parse(user)
                let token = user.token
                console.log(studentid);
                axios.delete(`https://blog-api-dev.octalinfotech.com/api/tages/${studentid}/delete`, {
                        'headers': {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    .then((res) => {
                        console.log(res);
                        this.getTags()
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

        getTags(page = 1) {
            if (page <= this.totalPage && page > 0) {
                this.currentPage = page;
            } else if (this.totalPage !== 1) {
                return;
            }

            let user = localStorage.getItem("data");
            user = JSON.parse(user)
            let token = user.token
            axios.get("https://blog-api-dev.octalinfotech.com/api/tages?page=" + page, {
                    'headers': {
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then((res) => {
                    this.totalPage = res.data.data.last_page
                    this.data = res.data.data.data
                    this.user = res.data.data.data
                })

        },
        add() {
            if (!this.name) {
                alert("input field is empty")
            }
            let data = {
                name: this.name
            }
            let user = localStorage.getItem("data");
            user = JSON.parse(user)
            let token = user.token
            axios.post("https://blog-api-dev.octalinfotech.com/api/tages/store", data, {

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

                    this.getTags()
                })
                .catch((error) => {
                    console.log(error);
                })

        }
    },
    created() {
        this.getTags()
    },

};
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
</style>
