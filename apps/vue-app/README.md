# Vue App

## Instructions

To start the development server you can run the following commands:

### `npm run start:vue`

## Plugins

This project is using the followings things:

https://getbootstrap.com/

https://github.com/avil13/vue-sweetalert2

https://vuelidate-next.netlify.app/

# Activities Session 06

1. **Notas**: 
    - Copiar y pegar en tu rama  **helpers/alerts.js**
    - Importa vue sweet alert en el main.ts, https://www.npmjs.com/package/vue-sweetalert2
  
## Watcher

1. **store.js**:
     - Agrega un nuevo atributo al store que se llame **postEditing: null**, este atributo servira para guardar un objecto del post que se este actualizando
     - Agrega su función para actualizarlo **setPostEditing(post)**
  
2. **PostItem.vue**:
     - En el método **editPost()**, manda a llamar **setPostEditing(post)** del store y enviale **this.post**
  
3. **PostForm.vue**:
     -  Agrega un **watch** que espie la variable **postEditing** del store (has uso de **dot-delimited**), para que valides si el usario esta validando o creando uno nuevo
     -  Setea tu variable **this.action = "Edit"** si **postEditing** tiene un valor o **this.action = "Create"** si no tiene ningún valor
     -  Si esta editando, llena tu modelo **this.post** con el valor del **postEditing** del store
     -  Setea en null postEditing del store en el **unmounted()**
     -  Agrega las validaciones necesarias para crear o actualizar el post al dar click en save del modal
  
3. **PostItem.vue**:
     -  Agrega la opción de eliminar el post en el método **deletePost()**
     -  Has uso de sweet alert para mostrar una alerta de confirmación para eliminar el post.
       
## Mixin

1. Has uso de este mixin para usar un sweet alert al crear/actualizar post, eliminar post y agregar un comentario. Esto es para mostrar un mensaje de success o error al ejecutar x acción.


## Fin del proyecto

Valida que el proyecto funcione correctamente, si existe algún issue o algo extraño, haz el fix



