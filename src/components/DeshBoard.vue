<template>

<div class="col py-3">

    contain

    <div class="d-flex" style="  justify-content: center;">
        <div class="card mt-4 mr-4" style="    margin-left: 10px;">

            <div>
                <slot name="image"> <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style="width:100%">
                </slot>

                <div class="container">
                    <h4><b>Jane Doe</b></h4>
                    <p>Interior Designer</p>
                </div>
            </div>

        </div>
        <div class="card mt-4 mr-4" style="    margin-left: 10px;">

            <div>
                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>Same Doe</b></h4>
                    <p>Interior Designer</p>
                </div>
            </div>

        </div>
        <div class="card mt-4 mr-4" style="    margin-left: 10px;">

            <div>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNvrBeIcwEyj7MKLlelk8KfoYkpsLEE72UJTuwgD-LUr4lN4Xc" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>Brus Doe</b></h4>
                    <p>Interior Designer</p>
                </div>
            </div>

        </div>
        <div class="card mt-4 mr-4" style="    margin-left: 10px;">

            <div>
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRRcpdRpnqbPpzbroxdM7SWB3JG03A-C3qmNT_xv-yUxIQM8gi3" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>Hulk Doe</b></h4>
                    <p>Interior Designer</p>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "DeshboardComponenet",
    data() {
        return {}
    },
    mounted() {

    },

}
</script>

<style scoped>
.sticy {
    position: -webkit-sticky;
    position: sticky;
}
</style>
<style scoped>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 20%;
    border-radius: 5px;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(9, 9, 9, 0.9);
}

img {
    border-radius: 5px 5px 0 0;
}

.container {
    padding: 2px 16px;
}
</style><style scoped>
footer {
    text-align: center;
    padding: 3px;
    background-color: rgb(151, 151, 151);
    color: rgb(75, 71, 71);
}
</style>
