<template>
<div>
    <div class="container mt-3">

        <button type="button" class="btn btn-" data-bs-toggle="modal" data-bs-target="#myModal">
            Profile
        </button>
    </div>

    <!-- The Modal -->
    <div class="modal" id="myModal">
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
                        <label for="fname">Email:</label>
                        <input type="text" id="fname" name="fname" v-model="email">
                        <br>
                        <br>
                        <label for="lname">Passworld:</label>
                        <input type="text" id="lname" name="lname" v-model="password">
                    </form>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>

</div>

<div>
    <div class="container mt-3">

        <button type="button" class="btn btn-" data-bs-toggle="modal" data-bs-target="#ChangePassworld">
            ChangePassworld
        </button>
    </div>

    <!-- The Modal -->
    <div class="modal" id="ChangePassworld">
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
                        <label for="fname">old Passworld</label>
                        <input type="text" id="fname" name="fname" >
                        <br>
                        <br>
                        <label for="lname">New Passworld:</label>
                        <input type="text" id="lname" name="lname" >
                        <br>
                        <br>
                        <label for="lname"> Confirm Passworld:</label>
                        <input type="text" id="lname" name="lname" >
                    </form>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>

</div>

</template>

<script>
export default {
    name: "ModalComponent",
    data() {
        return {
            Modal: "",
            email: "",
            password: "",
        }
    },
    methods: {
        getemail() {
            // let user = localStorage.getItem("data");
            // user = JSON.parse(user)
            // this.email = user.email
            // this.password = user.name
            // console.log();
        },

    },
    created() {
        this.getemail()
    }
}
</script>

<style scoped>
input {
    border: 2px solid;
    border-radius: 5px;
}
</style>
