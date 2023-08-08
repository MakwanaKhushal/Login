<template>
<!-- ============================= -->
<div>
    <nav class="navbar navbar-expand-lg  bg-light sticy">
        <img src="https://octalinfotech.com/img/octal-logo.png" alt="" style="width: 2%; border-radius: 45px" />
        <a class="navbar-brand" href="#">Octal infotech</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="
          justify-content: center;
          align-items: baseline;
          background-color: skyblue;
            justify-content: end;
          height: 60px;
        ">
            <div class="form-inline my-2 my-lg-0 d-flex">
                <div class="dropdown " >
                    <img class="dropbtn" src="https://ca.slack-edge.com/T04HNPJ1PV3-U04HWPFL198-417360c899fd-68" alt="" style="width: 84%; border-radius: 30%;" />
                    <div class="dropdown-content">
                        <button type="button" class="btn btn-" data-bs-toggle="modal" data-bs-target="#myModal">
                            Profile
                        </button>
                        <!-- <a href="#">ChangePassworld</a> -->
                        <button type="button" class="btn btn-" data-bs-toggle="modal" data-bs-target="#ChangePassworld">
                            ChangePassworld
                        </button>
                        <router-link to="/loginPage">
                            <a href="">Logout</a>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>
<!-- ========================== -->
<div class="d-flex  flex-column ">
    <div class="sidebar" style="background-color: gainsboro; width: 172px">
        <a class="active" href="#home">Home</a>

        <a href="#news" style="height: 72px">
            <router-link to="/newsPage">
                <i class="fa-solid fa-house"></i><span class="ms-1 d-none d-sm-inline">Categories</span>
            </router-link>
        </a>
        <a href="#contact" style="height: 72px">
            <router-link to="/helloWorld">
                <i class="fa-solid fa-blog"></i>&nbsp;&nbsp;
                <span class="ms-1 d-none d-sm-inline">Blog</span>
            </router-link>
        </a>
        <a href="#about" style="height: 72px">
            <router-link to="/deshBoard">
                <i class="fa-solid fa-user"></i> &nbsp;&nbsp;<span class="ms-1 d-none d-sm-inline">User</span>
            </router-link>
        </a>
        <a href="#about" style="height: 72px">
            <router-link to="/tags">
                <i class="fa-solid fa-tags"></i> &nbsp;&nbsp;<span class="ms-1 d-none d-sm-inline">Tags</span>
            </router-link>
        </a>
    </div>

    <router-view />
</div>
<!-- <Modal /> -->
</template>

<script>
// import Modal from '@/components/Modal'
export default {
    name: "SideBar",
    components: {
        // Modal
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

<style scoped>
.dropbtn {
    color: white;
    border: none;
    cursor: pointer;
}

.dropdown {
    position: relative;
    display: inline-block;
    margin-right: 50px;
}

.dropdown-content {
    display: none;
    position: absolute;
    margin-left: -100px;
    background-color: #f9f9f9;
    border-radius: 15px;
    min-width: 100px;
    box-shadow: 8px 16px 32px 16px rgba(1, 1, 1, 0.3);
    z-index: 1;
    justify-content: center;
    align-items: center;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>

<style scoped>
.sticy {
    position: -webkit-sticky;
    position: sticky;
}
</style>


<style scoped>
.sidebar {
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
}

.sidebar a {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
}

.sidebar a.active {
    background-color: #04aa6d;
    color: white;
}

.sidebar a:hover:not(.active) {
    background-color: #555;
    color: white;
}

.sidebar a:hover:not(.active) {
    background-color: #555;
    color: white;
}

div.content {
    margin-left: 200px;
    padding: 1px 16px;
    height: 1000px;
}

@media screen and (max-width: 700px) {
    .sidebar {
        width: 100%;
        height: auto;
        position: relative;
    }

    .sidebar a {
        float: left;
    }

    div.content {
        margin-left: 0;
    }
}

@media screen and (max-width: 400px) {
    .sidebar a {
        text-align: center;
        float: none;
    }
}
</style>
