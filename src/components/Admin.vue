<template>
<!-- ============================= -->
<!-- <nav class="navbar navbar-expand-lg  bg-light p-0">
    <div style="display: contents;">
        <img src="https://octalinfotech.com/img/octal-logo.png" alt="" style="width: 2%; border-radius: 45px" />
        <h5><b>OCTAL INFOTECH</b></h5>
    </div>
        &nbsp;&nbsp;
    <div class="collapse navbar-collapse" style="background-color: #96b1bb;justify-content: end;">
       
    </div>
</nav> -->
        <!---->
        
<nav class="navbar   bg-light p-1" style="position:fixed; width:100%;z-index: 999;box-shadow: 0px 0px 10px slategrey;  ">

  <div class="container-fluid">
    <a class="navbar-brand" > <img src="https://octalinfotech.com/img/octal-logo.png" style="width: 40px;border-radius: 25px;" class="animate-bounce " >&nbsp;&nbsp;<b style="color: black;font-size: 25px;        text-shadow: 0px 0px 1px;">Octal infotech</b></a>
   
 
      <div class="nav-item dropdown">
          <img   src="https://ca.slack-edge.com/T04HNPJ1PV3-U04HWPFL198-417360c899fd-68" style="width:80%; border-radius: 50%;" class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" />
            
          <ul style="border-radius: 10%;background: aliceblue;" class="dropdown-menu " aria-labelledby="navbarDropdown">
            <li>
                 <button type="button" class="btn btn-" data-bs-toggle="modal" data-bs-target="#myModal">
                    Profile
                </button>
            </li>
            <li>     
                <button type="button" class="btn btn-" data-bs-toggle="modal" data-bs-target="#ChangePassworld">
                    ChangePassworld
                </button>
            </li>
            <li> 
                <button type="button" class="btn btn-" @click="logout">
                    logout
                </button>
            </li>
          </ul>
    </div>
  </div>
</nav>
<br><br><br>


<!-- ========================== -->
<div >
    <div class="sidebar " style="background-color: gainsboro;box-shadow: 0px 0px 10px slategrey;  ">

        <div class="side">
            <div style="height: 50px">
                <router-link to="/admin/deshBoard" class="router-link" >
                    <i class="fa-solid fa-house" style="color:#8400ff;"></i>&nbsp;&nbsp;<span class="ms-1 d-none d-sm-inline"><b>Dashbord</b></span>
                </router-link>
            </div>
            <div style="height: 50px">
                <router-link to="/admin/user" class="router-link" >
                   <i class="fa-solid fa-user fa-lg" style="color: #ba405e;"></i>&nbsp;&nbsp;<span class="ms-1 d-none d-sm-inline"><b>Users</b></span>
                </router-link>
            </div>
            <div style="height: 50px">
                <router-link to="/admin/blog" class="router-link" >
                    <i class="fa-solid fa-cube fa-lg" style="color: #324b76;"></i> &nbsp;&nbsp;<span class="ms-1 d-none d-sm-inline"><b>Blogs</b></span>
                </router-link>
            </div>

            <div  style="height: 50px" >
                <router-link to="/admin/tags" class="router-link" >
                    <i class="fa-solid fa-tag fa- fa-xl" style="color: #009393;"></i> &nbsp;&nbsp;<span class="ms-1 d-none d-sm-inline"><b>Tags</b></span>
                </router-link>
            </div>
            <div  style="height: 50px" >
                <router-link to="/admin/categories" class="router-link"  >
                    <i class="fa-solid fa-graduation-cap fa-lg" style="color:rgb(255 0 160 / 69%)"></i>&nbsp;&nbsp;
                    <span class="ms-1 d-none d-sm-inline"><b>Categories</b></span>
                </router-link>
            </div>
                   
        </div>
    </div>
    
    <div>   
        <router-view />
    </div>
</div>
<Modal />
  
</template>

<script>

import Modal from '@/components/Modal'
export default {
    name: "SideBar",
    components: {
        Modal
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
.dropdown-toggle{
        width: 50px;
    border-radius: 25px;
}
.dropbtn {
    color: white;
    cursor: pointer;
    border-radius: 50%;
}

.dropdown {
    position: relative;
    display: inline-block;
}
.router-link{
    text-decoration: none;
    color: black;
}

.dropdown-content {
    display: none;
    position: absolute;
    margin-left: -100px;
    background-color: #f9f9f9;
    border-radius: 15px;
    min-width: 100px;
    box-shadow: 3px 3px 22px 4px rgba(0.5, 0.5, 0.5, 0.3);
    z-index: 1;
    justify-content: center;
    align-items: center;
}

.dropdown-content div {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}


</style>
<style scoped>
.side{
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
}
</style>

<style scoped>
.sticy {
    position: -webkit-sticky;
    position: sticky;
}
.bg-light {
    background-color: #99b2b6!important;
}
.dropdown-menu[data-bs-popper] {
    top: 100%;
    left: 0;
    margin-top: 1.125rem;
    margin-left: -103px;
}

</style>

<style scoped>

.navbar-brand{
display: flex;
justify-content: center;
align-items: center;
}
.nav-link {
    padding: 0px;
}
.sidebar {
    position: fixed;
    height: 100%;
    margin-top: -5px;
}

.sidebar div {
    padding: 20px;
}

.sidebar div:focus:not(.active) {
    color: rgb(255, 0, 157);
}





@media screen and (max-width: 700px) {
    .sidebar {
        width: 100%;
        height: auto;
        position: relative;
    }

    .sidebar div {
        float: left;
    }

    div.content {
        margin-left: 0;
    }
}

@media screen and (max-width: 400px) {
    .sidebar div {
        text-align: center;
        float: none;
    }
}

</style>
