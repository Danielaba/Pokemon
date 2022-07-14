<template>
        <nav class="navbar">
            <router-link to="/" class="container navbar__enlace">
                <img class="navbar__logo" src="../assets/Pokemon-Logo.jpg" alt="">
            </router-link>
        </nav>

</template>

<style>
*{
    margin: 0px;
    padding: 0px;
}

.navbar {
    display: flex;
    align-items: center;
    background-color: black
}

.navbar__logo {
    height: 50px;
    width: 130px;
}

.navbar__logo:hover {
    height: 55px;
    width: 140px;
    transition: ease-in-out 0.5s;
}
</style>