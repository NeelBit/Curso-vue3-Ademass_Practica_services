<script setup>
import { RouterLink } from 'vue-router'


</script>


<template>

<header>
    <nav>
        <RouterLink class="link" :to="{name: 'home'}">Home</RouterLink>
        <RouterLink class="link" :to="{name: 'about'}">About</RouterLink>
        <RouterLink class="link" :to="{name: 'posts'}">Posts</RouterLink>
    </nav>
</header>

</template>


<style scoped lang="scss">

header {
    background-color: $blue;
}

nav {
    display: flex;
    justify-content: space-around;
}

.link {
    margin: 10px;
    padding: 15px;
    text-transform: uppercase;
    border: solid 1px black;
    border-radius: 10px;

    text-decoration: none;
    color: black;
    font-weight: 900;

    /* clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    transition: clip-path 1s ease-in-out; */

    background: linear-gradient(86deg, #40d8b1, #f333f8);
    background-size: 400% 400%;

    -webkit-animation: AnimationName 30s ease infinite;
    -moz-animation: AnimationName 30s ease infinite;
    animation: AnimationName 30s ease infinite;

    transition: background .5s ease-in;
}

.link:hover, .active {
    animation: Probando 1s linear infinite alternate;
    animation-delay: 1s;
}


</style>