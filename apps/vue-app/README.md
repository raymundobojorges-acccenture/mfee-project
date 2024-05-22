# Vue App

## Instructions

To start the development server you can run the following commands:

### `npm run start:vue`

## Plugins

This project is using the followings things:

https://getbootstrap.com/

https://github.com/avil13/vue-sweetalert2

https://vuelidate-next.netlify.app/

# Activities Session 04

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

1. 
   
## Vue router

1. 
