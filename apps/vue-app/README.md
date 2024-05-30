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

1. **PostForm.vue**:
     - Has uso de **v-model** para bindear el formalario a un objecto local con las propiedades necesarias (id, title, description, categoryId, image, comments) 
     - Deberás hacer uso de **getCategories()** para obtener las categorias y mostrarlos en el select.
     - Valida el formulario al menos de que todos los campos sean requeridos.
     - Si el formulario no es valido, muestra sus respectivos errores de cada campo
     - Has uso de **createPost** que acabas de crear si el formulario es válido
     - Al crear exitosamente un post nuevo puedes cerrar el modal con la siguiente linea: **this.$refs.btnCloseModal.click();**, ve más sobre la **Template Refs** aquí https://vuejs.org/guide/essentials/template-refs.html
     - Llama de nuevo **getPosts()** del store, para actualizar los posts
     - Crea un nuevo método que se encargue de hacer un reset de tu objecto local y las validaciones de tu form, manda a llamar ese método con el evento click la x del modal y en el botón close

2. **NewComment.vue**:
     - Has uso de **v-model**
     - Valida el input con que sea requerido
     - Sino es válido muestra los errores, si es válido has un emit del nuevo commentario
     - Vuelve a setear el comment en null y has un reset del input
  
3. **CommentsLists.vue**:
     - Escuha el emit de **NewComment.vue** y has un emit de ese mismo comentario
     - Crea una nueva prop llamada **comments** que sea Array y requerida, elimina tu varible de data **comments**
  
4. **PostDetailView.vue**:
     - Crea un método que haga uso de **getPostById(id)** y mandalo a llamar en el **mounted()**, guarda el resultado en una varible local llamada **post**
     - Has uso de **data bindind** y **text interpolation** para mostrar los datos de post en la vista (image, title, description), enviale los **comments** del post a **NewComment.vue** 
     - Escucha el emit de **CommentsList.vue** y has uso de la función para actualizar un post (**updatePost(post)**) para agreagar el comentario nuevo
     - Valida que puedas añadir un comentario nuevo, ver la información del post que selecciones, etc.


