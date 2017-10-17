<h1>Contexto</h1>

Handlebars se basa en las mejores características de Mustache. Una de ellas es el concepto de contexto. **Cada plantilla que implementes tiene un contexto**. **El nivel superior, es el objeto JavaScript** que se pasa a la plantilla compilada. Pero los **helpers** como **#each** o **#with** lo modifican, de manera que se puede acceder a las propiedades del objeto iterado directamente. Con el siguiente ejemplo verás las cosas más claras.

<img src="https://github.com/jovihu10/handlebars/blob/master/practica3_%20contexto/img/screen.png">