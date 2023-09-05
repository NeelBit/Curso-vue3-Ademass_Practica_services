import {
    ref
} from "vue";

class PostService {

    /* propiedad privada private */
    /* en ts :Ref<Array<IPost>> */
    #posts;

    // siguiendo el tutorial:
    #post;

    constructor() {
        this.#posts = ref([]);

        // siguiendo el tutorial
        this.#post = ref({});
    }

    /* en ts devuelve : Ref<Array<IPost>> */
    getPosts() {
        //console.log(this.#posts.value);
        return this.#posts.value;
    }

    // siguiendo el tutorial:
    getPost() {
        return this.#post.value;
    }

    /* obtener los datos la promesa de retorno */
    /* async en ts devuelve : Promise<void> */
    async fetchAll() {
        // try catch para manejar errores externos
        try {
            const UrlAPI = 'https://jsonplaceholder.typicode.com/posts';

            const response = await fetch(UrlAPI);
            const dataJson = await response.json();

            this.#posts.value = await dataJson;

            //console.log(this.#posts.value);
            //console.log(this.getPosts());
        } catch (error) {
            console.log(error);
        }
    }


    /* 
        Obtener un post por ID
    */
    async fetchByID(id) {
        try {
            const UrlAPI = `https://jsonplaceholder.typicode.com/posts/${id}`;

            const response = await fetch(UrlAPI);
            const dataJson = await response.json();

            // siguiendo el tutarial
            this.#post.value = await dataJson;

            //return dataJson;
        } catch (error) {
            console.log(error);
        }
    }

}

export default PostService;