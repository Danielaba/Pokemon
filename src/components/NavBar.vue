<template>
        <nav class="navbar">
            <router-link to="/" class="container">
                <img class="logo" src="../assets/Pokemon-Logo.jpg" alt="">
            </router-link>
        </nav>

</template>

<style>
*{
    margin: 0px;
    padding: 0px;
}

.logo {
    height: 50px;
    width: 130px;
}

.logo:hover {
    height: 55px;
    width: 140px;
    transition: ease-in-out 0.5s;
}

.navbar {
    display: flex;
    align-items: center;
    background-color: black
}

.navbar a {
  font-weight: bold;
  font-size: 35px;
  color: #FFCB05;
  text-shadow: 5px 5px 10px black;
  text-decoration: none;
  font-family: 'Sedgwick Ave', cursive;
}
</style>