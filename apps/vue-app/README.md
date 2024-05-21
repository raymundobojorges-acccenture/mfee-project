# Vue App

## Instructions

To start the development server you can run the following commands:

### `npm run start:vue`

## Plugins

This project is using the followings things:

https://getbootstrap.com/

https://github.com/avil13/vue-sweetalert2

https://vuelidate-next.netlify.app/

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
4. **PostForm**: Crea una variable con **"Create"** como valor por defecto, usa **Text interpolation** para mostrar la variable en el **h5**, Nota: deja el string "Post" al final como estático.

## Render PostForm component

1. Renderiza **PostForm** al final del template de **HeaderPost**.
2. Al hacer click en el ícono del lápiz del HeaderPost component debe mostrarse el modal.

