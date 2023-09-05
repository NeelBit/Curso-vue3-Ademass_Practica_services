<script setup>

import { ref, onBeforeMount } from 'vue';
import PostService from '@/services/PostService';

/* nuevo postService se ejecuta su constructor */
const miPostService = new PostService();
const misPosts = ref(null)

/* ASINCRONO!!!! */
onBeforeMount(async () => {

    /* llama a fetchAll que le asigna a post.value los datos */
    await miPostService.fetchAll();
    
    misPosts.value = miPostService.getPosts();

})

</script>

<template>

    <section class="container">
        <h2 class="title text-center">Listado de posts de https://jsonplaceholder.typicode.com/posts</h2>
        <div class="posts">
            <article class="post" v-for="p in misPosts" :key="p.id">
                <h3>{{ p.title }}</h3>
                <p> <span class="badge text-bg-dark">{{ p.id }}</span>  {{ p.body }}</p>

                <RouterLink :to="{name: 'post', params: {id: p.id}}" class="btn btn-primary">Ver más</RouterLink>

            </article>
        </div>
    </section>

</template>

<style scoped lang="scss">

/* @import '../scss/variables'; */
/* 
    IMPORTACIÓN GENERAL EN vite.config.js

        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "./src/scss/_variables.scss";

                    `
                }
            }
        }
*/
.posts {
    width: 90%;

    display: flex;
    /* justify-content: center;
    align-items: center; */

    margin: 10px auto;

    flex-direction: column;

    gap: $separacion;

    border: solid 1px $color-negro-relax;

    padding: 10px;
    border-radius: 10px;

    .post {
        border-bottom: 1px solid $color-blue-darken-4;
        
        h3 {
            text-align: center;
            text-decoration: $subrayado;
            color: $color-azul;
        }
    }

    .post:hover {
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        /* background-color: darken(#000000, 30%);
        color: lighten(#fff, $amount: 10%); */
    }
}


</style>