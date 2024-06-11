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
