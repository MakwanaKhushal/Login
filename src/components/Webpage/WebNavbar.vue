<template>
 <nav class="navbar">
    <div class="navbar-container container">
      <input type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <ul class="menu-items">
        <li><a href="#Home">Home</a></li>
        <li><a href="#Category">Category</a></li>
        <li><a href="#Menu">Menu</a></li>
        <li><a href="#Testimonial">Testimonial</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div class="head">
       <img src="https://octalinfotech.com/img/octal-logo.png" loading="lazy" class="w-10  rounded-full" alt="tailus logo">
        <h6><b class="text-3xl" style="font-family: Georgia, serif;"> Octal infotech</b></h6>

      </div>
    </div>
  </nav>
  <br /><br /><br /><br /><br />
</template>
<script>
export default {
    
}
</script>

<style scoped>
.description{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.img {
  width: 130px;
  height: 130px;
  border-radius: 100%;
  border: 3px solid;
}
.img2 {
  width: 60%;
  border-radius: 10px;
}
.carousel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.html {
  font-size: 62.5%;
}
.navbar input[type="checkbox"],
.navbar .hamburger-lines {
  display: none;
}
.container {
  max-width: 1200px;
  width: 90%;
  margin: auto;
}
.navbar {
  box-shadow: 0px 10px 10px 0px #c8c8cc;
  position: fixed;
  width: 100%;
  background: #a3a3a363;
  color: #000;
  opacity: 0.95;
  z-index: 100;
  padding: 7px;
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
}
.menu-items {
  order: 2;
  display: flex;
  font-size: 30px;
}

.menu-items li {
  list-style: none;
  margin-left: 1.5rem;
  font-size: 1.3rem;
}
.navbar a {
  color: #000000;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}
.navbar a:hover {
  color: #117964;
}
@media (max-width: 768px) {
  .navbar {
    opacity: 0.95;
  }
  .navbar-container input[type="checkbox"],
  .navbar-container .hamburger-lines {
    display: block;
  }
  .navbar-container {
    display: block;
    position: relative;
    height: 64px;
  }
  .navbar-container input[type="checkbox"] {
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
  .navbar-container .hamburger-lines {
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
  .navbar-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #333;
  }
  .navbar-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
  }
  .navbar-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }
  .navbar-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
  }
  .navbar .menu-items {
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
    box-shadow: 5px 0px 10px 0px #aaa;
    overflow: scroll;
  }
  .navbar .menu-items li {
    margin-bottom: 1.8rem;
    font-size: 1.1rem;
    font-weight: 500;
  }
  .logo {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 2.5rem;
  }
  .navbar-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }
  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }
  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }
  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }
}
@media (max-width: 500px) {
  .navbar-container input[type="checkbox"]:checked ~ .logo {
    display: none;
  }
}
.head {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
}
.container {
  max-width: 1455px;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
}
</style>