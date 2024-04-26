<template>
  <nav class="navbar">
    <div class="navbar-container container">
        <input type="checkbox" name="" id="">
        <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
        <ul class="menu-items">
            <router-link to="/">
                <li><a href="#">Home</a></li>
            </router-link>
            <li><a href="#">About</a></li>
            <li><a href="#">Category</a></li>
          
            <router-link to="contactsuspage">
                <li><a href="#">Contact</a></li>

            </router-link>
            
                <div
                    class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-slate-100 overflow-hidden">
                    <div class="grid place-items-center h-full w-12"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true" class="h-5 text-gray-300">
                            <path fill-rule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clip-rule="evenodd"></path>
                        </svg></div><input
                        class="peer h-full w-full outline-none text-sm bg-slate-100 text-gray-700 bg-s pr-2 border-none"
                        type="text" id="search" placeholder="Search something..">
                </div>
            
   
        </ul>
        <h1 class="logo">Octal Infotech</h1>
        
        <img src="http://octalinfotech.com/img/octal-logo.png" style="width:10%; width: 4%;border-radius: 12px;" alt="">
    </div>
</nav>
  <br><br><br><br><br>
</template>
<script>
export default {
    
}
</script>

<style scoped>




.navbar input[type="checkbox"],
.navbar .hamburger-lines{
    display: none;
}

.container{
    max-width: 1200px;
    width: 90%;
    margin: auto;
}

.navbar{
    box-shadow: 0px 5px 10px 0px #aaa;
    position: fixed;
    width: 100%;
    background: #24262bcc;
    color: #000;
    padding: 5px;
    z-index: 100;
}

.navbar-container{
    display: flex;
    justify-content: space-between;
    height: 64px;
    align-items: center;
}

.menu-items{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    order: 2;

}
.logo{
    color: white;
    order: 1;
    font-size: 2.3rem;
    margin-right: auto;
}

.menu-items li{
    list-style: none;
    margin-left: 1.5rem;
    
    font-size: 1.3rem;
}

.navbar a{
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease-in-out;
}

.navbar a:hover{
    color: #117964;
}

@media (max-width: 768px){
    .navbar{
        opacity: 0.95;
    }

    .navbar-container input[type="checkbox"],
    .navbar-container .hamburger-lines{
        display: block;
    }

    .navbar-container{
        display: block;
        position: relative;
        height: 64px;
    }

    .navbar-container input[type="checkbox"]{
        position: absolute;
        display: block;
        height: 32px;
        width: 30px;
        top: 20px;
        left: 20px;
        z-index: 5;
        opacity: 0;
        cursor: pointer;
    }

    .navbar-container .hamburger-lines{
        display: block;
        height: 28px;
        width: 35px;
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .navbar-container .hamburger-lines .line{
        display: block;
        height: 4px;
        width: 100%;
        border-radius: 10px;
        background: #333;
    }
    
    .navbar-container .hamburger-lines .line1{
        transform-origin: 0% 0%;
        transition: transform 0.3s ease-in-out;
    }

    .navbar-container .hamburger-lines .line2{
        transition: transform 0.2s ease-in-out;
    }

    .navbar-container .hamburger-lines .line3{
        transform-origin: 0% 100%;
        transition: transform 0.3s ease-in-out;
    }

    .navbar .menu-items{
        padding-top: 100px;
        background: #fff;
        height: 100vh;
        max-width: 300px;
        transform: translate(-150%);
        display: flex;
        flex-direction: column;
        margin-left: -40px;
        padding-left: 40px;
        transition: transform 0.5s ease-in-out;
        box-shadow:  5px 0px 10px 0px #aaa;
        overflow: scroll;
    }

    .navbar .menu-items li{
        margin-bottom: 1.8rem;
        font-size: 1.1rem;
        font-weight: 500;
    }

    .logo{
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 2.5rem;
    }

    .navbar-container input[type="checkbox"]:checked ~ .menu-items{
        transform: translateX(0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1{
        transform: rotate(45deg);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2{
        transform: scaleY(0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3{
        transform: rotate(-45deg);
    }

}

@media (max-width: 500px){
    .navbar-container input[type="checkbox"]:checked ~ .logo{
        display: none;
    }
}
</style>