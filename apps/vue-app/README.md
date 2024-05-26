# Vue App

## Instructions

To start the development server you can run the following commands:

### `npm run start:vue`

## Plugins

This project is using the followings things:

https://getbootstrap.com/

https://github.com/avil13/vue-sweetalert2

https://vuelidate-next.netlify.app/

# Activities Session 05

1. **Notas**: 
    - Copiar y pegar en tu rama el folder **json-server** y los archivos que tiene dentro (**categories.json** y **posts.json**)
    - Copiar y pegar el folder **api** y los archivos que tiene dentro (**categories/categoriesApi.js** y **posts/postApi.js**)
    - Copiar y pegar el folder **helpers** y los archivos que tiene dentro (**categories.js** y **posts.js**)
    - Levanta los json servers ejecutando **npx json-server json-server/categories.json** y **npx json-server json-server/posts.json --port 3031** (puedes seleccionar otro puerto)
  
## Using axios

1. **post.js**:
     - Finaliza las llamadas a los endpoints de posts, **getById(id)**, **createPost(post)**, **updatePost(post)**, **deletePost()** (toma como ejemplo el **getPost** que ya existe)
  
2. **CategoryList**:
     - Remueve la llamada al método **buildCategories()** del **created()**
     - Deja vacio tu array de **categories** (elimina el código harcoded)
     - Crea un método llamado **getCategories()**, y dentro manda a llamar **getCategories()** del archivo **helpers/categories.js**, guarda la respuesta en tu variable **categories**
     - Manda a llamar **buildCategories()** dentro de la nueva función **getCategories()** del componente
     - Llama a **getCategories()** en el **created()** hook
     - Valida que obtenga las categorias del json server.
       
3. **store.js**:
     - Agrega un método en el store, que guarde el resultado del endpoint **getPosts** del archivo **helpers/posts.js** en el arreglo **posts** del store
  
3. **PostView.vue**:
     - Deja vacio tu array de **posts** (elimina el código harcoded)
     - Llama el método para obtener los posts del store en el **created()** hook
     - Valida que se guarden los posts del json server en la variable del store.
     - Crea una propiedad computada llamada **postsFiltered()** que se encargue de retornar los posts filtrados por la categoria seleccionada (utiliza el valor de **currentCategoryId** que tienes en el store ).
     - Has un pequeño cambio en **thereArePosts()** para que ahora valide el length de la **computed** que acabas de crear
     - Has otro cambio en el **v-for** para que ahora itere **postsFiltered()**
     - Valida que funcione correctamente el filtrado de los posts al seleccionar filtrar por alguna categoria
       
## Forms



