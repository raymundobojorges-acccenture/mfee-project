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

