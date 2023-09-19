<template>
<div>
    <div class="container mt-3">

        <button type="button" class="btn btn-" data-bs-toggle="modal" data-bs-target="#myModal">
            
        </button>
    </div>

    <!-- The Modal -->
    <div class="modal fade" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Profile</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">

                    <form>
                        <div style="display: flex;"><label for="fname"><b>Email :</b></label></div>
                        <input type="text" id="fname" name="fname" v-model="profile.name" style="width:100%;">
                        <br>
                        <div style="display: flex;"><label for="fname"><b>Name :</b></label></div>
                        <input type="text" id="lname" name="lname" v-model="profile.email" style="width:100%;">
                    </form>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md" data-bs-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>

</div>

<div>
    <div class="container mt-3">

        <button type="button" class="btn btn-" data-bs-toggle="modal" data-bs-target="#ChangePassworld">
            
        </button>
    </div>

    <!-- The Modal -->
    <div class="modal fade" id="ChangePassworld">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">ChangePassworld</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">

                    <form>
                        <div style="display: flex;"><label for="fname"><b>old Password :</b></label></div>
                        <input type="text" id="fname" name="fname"  style="width:100%;">
                        <br>
                        <div style="display: flex;"><label for="lname"><b>New Passeord :</b></label></div>
                        <input type="text" id="lname" name="lname" style="width:100%;">
                        <br>
                        <div style="display: flex;"><label for="lname"><b>Confirm Password :</b></label></div>
                        <input type="text" id="lname" name="lname"  style="width:100%;">
                    </form>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 border border-blue-700 rounded-md" data-bs-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>

</div>

</template>

<script setup>

import { ref } from "vue";

const profile = ref({
    name :'',
    email :''
}) 

let data = localStorage.getItem('user')
    data = JSON.parse(data)

    profile.value.name= data.name
    profile.value.email= data.email

</script>

<style scoped>
input {
    border: 2px solid;
    border-radius: 5px;
}
.modal-content{
    border-radius: 20px;
}
</style>
