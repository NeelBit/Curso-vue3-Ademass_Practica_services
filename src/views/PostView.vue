<script setup>

import { ref, onBeforeMount } from 'vue';
import { RouterLink } from 'vue-router';
import PostService from '@/services/PostService';
import { useRoute } from 'vue-router';

/* nuevo postService se ejecuta su constructor */
const miPostService = new PostService();

// para no hacer pedido por fetch
/* const misPosts = ref(null);
const postActual = ref(null); */

const route = useRoute();
const postId = ref(null);

/* const id = ref(null);
const title = ref(null);
const body = ref(null); */
const id = ref(null), title = ref(null), body = ref(null);


const probandoPostNuevo = ref(null);

/* ASINCRONO!!!! */
onBeforeMount(async () => {

    /* llama a fetchAll que le asigna a post.value los datos */
    /* await miPostService.fetchAll();
    
    misPosts.value = miPostService.getPosts(); */

    postId.value = route.params.id;

    await miPostService.fetchByID(postId.value)

    probandoPostNuevo.value = miPostService.getPost();

    /* misPost es un arreglo, por eso arranca en 0, y hay que restar 1 */
    //postActual.value = misPosts.value[postId.value-1];

    // siguiendo el tutorial:
    //postActual.value = miPostService.fetchByID(postId.value);

    id.value = probandoPostNuevo.value.id;
    title.value = probandoPostNuevo.value.title;
    body.value = probandoPostNuevo.value.body;

})


</script>


<template>

<article class="container">

    <div class="card mb-2">
        <div class="card-body">
            <h3 class="card-title"> 
                <span class="badge text-bg-dark">{{ id }}</span> 
                {{ title }}
            </h3>
            <p class="card-text">{{ body }}</p>
        </div>
    </div>

    <RouterLink :to="{name: 'posts'}" class="btn btn-primary">Volver atrás</RouterLink>

</article>


</template>


<style scoped>

article {
    padding: 10px;
}

</style>