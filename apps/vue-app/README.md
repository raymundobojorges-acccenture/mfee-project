# Vue App

## Instructions

To start the development server you can run the following commands:

### `npm run start:vue`

## Plugins

This project is using the followings things:

https://getbootstrap.com/

https://github.com/avil13/vue-sweetalert2

https://vuelidate-next.netlify.app/

# Activities Session 01

## Render PostLayout.vue

1. Existe el componente **/layouts/PostLayout.vue**, debes exportalo y rederizalo en **App.vue**

## Render PostView.vue component

1. Existe un archivo llamado **PostView.html**, copia y pega su contenido en el template de **PostView.vue**. Elimina el archivo html
2. Del archivo **PostView.css** copia su contenido y pégalo dentro del style de **HeaderPost.vue**
3. Elimina el archivo css
4. Rederiza este componente en **PostLayout.vue**

## Render Header components

1. Copiar y pegar todo el bloque que indica el comentario **Inicio HeaderPosts.vue** hasta **Fin HeaderPosts.vue** dentro del template de **HeaderPost.vue**. Renderizarlo una vez en el mismo lugar donde estaba su bloque de comentarios en **PostView.vue**
2. Copiar y pegar todo el bloque que indica el comentario **Inicio CategoriesList.vue** hasta **Fin CategoriesList.vue** dentro del template de **CategoriesList.vue** y agregarlo al template del componente creado, renderizarlo una vez dentro de **HeaderPost.vue** en el mismo lugar donde se encontraba su bloque de comentario.
3. Copiar y pegar todo el bloque del comentario de **Inicio CategoryItem.vue** dentro del template de **Fin CategoryItem.vue**, renderizar este componente dentro de **CategoriesList.vue** en el mismo lugar donde se encontraba su bloque de comentario.

## Render PostItem component

1. Copiar y pegar todo el contenido del bloque de comentario **Inicio PostItem.vue** hasta **Fin PostItem.vue** dentro del template de **PostItem.vue**
2. Existe un archivo llamado **PostItem.css** copia y pegar su contenido en el **<style>** del componente creado en el punto anterior.
3. Renderizarlo una vez en el mismo lugar donde se encontraba su bloque de código.
# Activities Session 02

**Nota:** En estas actividades encontrarás archivos nuevos (**PostForm.vue**, **PostDetailView.vue**, **CommentItem.vue**, **NewComment.vue** y **CommentList.vue**), copia todo su contenido en tu proyecto (revisa que lo copies en el mismo path) y realiza la actividad indicada.

## Add created hook

1. Añade el hook **created()** en los componentes que indica

## Add unmounted hook

1. Añade el hook **unmounted()** en el componente que indica

## Render components

1. Renderiza el componente que indica cada comentario

## Add v-for directive

1. Añade la directiva **v-for** en cada componente que indican los comentarios
2. Has uso del key
# Activities Session 03

## Create computed properties

1. **PostView**: Añade un **v-if** usando una propiedad computada (creala) en el **alert-warning** para mostrarlo cuando el array este vacio.
2. **CommentList**: Añade un **v-show** usando una propiedad computada (creala) en el **alert-warning** para mostrarlo cuando el array este vacio y añade otro **v-show** en el **<CommentItem>** para mostrarlo cuando no sea vacio

## Adding click events

1. **NewComment**: Añade un evento click  en el **botón Add** y crea un método llamado **addComment()** que lo escuche
2. **PostItem**:
     - Añade un evento click en la etiqueta **div** que tiene las clases **card-img-overlay mt-3 ms-3 card-img** y crea un método llamado **goToPostDetail(id)** que reciba un id de parámetro
     - Añade un evento click en el elemento **i** que tiene las clases **fa-solid fa-pen pe-3** y crea un método llamado **editPost()**
     - Añade un evento click en el elemento **i**  que tiene las clases **fa-solid fa-trash** y crea un método llamado **deletePost()**
4. **CategoryItem**: Añade un evento click en el **button** y crea un método llamado **selectCategory(id)** que reciba un id de parámetro

## Adding data binding

1. **CategoryItem**: Has uso de **Class binding** en el elemento **button** para añadir de clase **active**, déjala por defecto en false por ahora.
2. **NewComment**: Has uso de **Class binding** en el elemento **input** para añadir de clase **is-invalid**, déjala por defecto en false por ahora.
3. **HeaderPost**: Crea una varibale que guarde el contenido del **h6** y otra para el **h1**, y has uso de **Text interpolation** para mostrar cada variable.
4. **PostForm**: Usa **Text interpolation** para mostrar la variable **action** en el **h5**, Nota: deja el string **"Post"** al final como estático.

## Render PostForm component

1. Renderiza **PostForm** al final del template de **HeaderPost**.
2. Al hacer click en el ícono del lápiz del HeaderPost component debe mostrarse el modal.
# Activities Session 04

**Nota:** En estas actividades encontrarás nuevos métodos o archivos que deberás copiar y pegar en tu rama (ejemplo: buildCategories() y los archivos store.js, router.js y NotFoundView.vue)

## Adding events and props

1. **CategoryItem**:
     - En el método **selectCategory()** has un emit llamado **selectCategory** que emita el id que recibe
     - Agrega una **prop** llamada **category**, que sea de tipo Objecto y requerida
     - Valida la class **active** del botón con la nueva prop **category.active**
     - En el event @click envia **category.id**
     - Has uso de **Text interpolation** para mostrar **category.name** en el botón.
  
2. **CategoriesList**:
     - Escucha el evento que emite **CategoryItem** component, crea un nuevo método que reciba el $event y has uso de map() de js para setear en true el atributo **active** de la categoria seleccionada e igualar el valor al array **categories**
     - Copia el método **buildCategories()** y mandala a llamar en el **created** hook
     - Enviale la prop category a **CategoryItem**
     - Valida que al hacer click en alguna categoria debe marcarla como seleccionada.
  
3. **CommentItem**:
     -  Define una prop llamada **comment**, tipo **String** y **requerida**
     -  Define una prop llamada **name**, tipo **String** y por default que tenga el valor de **'Anonymous'**
     -  Usa **Text interpolation** para mostrar las props en el template (en el **h5**  y **p**)

3. **CommentList**:
     -  1. Enviale la propiedad **comment** a **CommentItem**
      
4. **PostItem**:
     -  1. Define una **prop** llamada **post**, de tipo **objecto** y **requerida**
     -  2. Has uso de **Data binding** y **Text interpolation** para mostrar cada uno de los datos del post(post.image, post.title, post.comments.length, post.description, post.category.name)
      
5. **PostView**:
     -  1. Enviale la **prop** post a **PostItem**
     -  2. Valida que se muestren correctamente los posts.
       
## Reactivity API

1. Define una propiedad llamada **currentCategoryId** con valor por defecto = ""1"" en el archivo **/store/store.js** (has uso de Reactive API y exporta el store), en este atributo guardaremos el id de la categoria que este seleccionada.
2. Crea un método llamado **setCurrentCategory()** que reciba un nuevo valor para modificar el valor de la propiedad **currentCategoryId** en el archivo **/store/store.js**
3. Importa el **store.js** en **CategoryList.vue** e implementalo en **data()**
4. En el método **selectCategory(id)** manda a llamar **setCurrentCategory(id)** del store, para actualizar la categoria seleccionada en el state. Valida que al hacer clic en alguna categoria se actualice el valor del state.
5. Define una propiedad llamada **posts: []** en el store.
   
## Vue router

1. **router.js**:
     - Importa y usa el archivo **router.js** en el **main.ts**
     - Crea una ruta **"/home"** que muestre **PostView**, agregale el name **home**.
     - Define una ruta con el path: **"/"** que haga redirect a **home**
     - Crea una ruta **"/post-detail"** que muestre **PostDetail** agregale el name **post-detail** y reciba id como parámetro, define que esta ruta incluye **props**.
     - Crea un path que use **pathMatch** para mostrar el componente **/shared/views/NotFoundView.vue**

      **Nota**: Has uso de carga perezosa

3. **App.vue y PostLayout.vue**:
     - Has uso de **router-view** para mostrar las rutas creadas
     - Valida que funciones los path que acabas de crear

4. **PostItem.vue**: 
     - Importa el router en el archivo.
     - Agregar un router push en el método **goToPostDetail(id)** que haga un redirect al path **post-detail** y envia como parametro el **id** que recibe
     - Valida que funcione
     
5. **PostDetailView**:
     - Ha un redirect a la página anterior con un evento **click** en el elemento que tiene la clase **fa-chevron-left**
     - Define la prop **id**, la propiedad que se envia por la ruta. Debe ser **string**
     - Validar que funcione

