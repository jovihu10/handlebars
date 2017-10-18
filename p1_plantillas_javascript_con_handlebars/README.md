# handlebars

<img src="https://github.com/jovihu10/handlebars/blob/master/practicas/practica1_plantillas/img/logo.png">



La operativa normal con Handlebars es la siguiente:

1. Cargar una plantilla, que no es más que un código HTML mezclado con unos sencillos elementos de control
2. Compilar la plantilla, que nos permite convertirlo en una función JS
3. Ejecutar la plantilla para obtener la cadena HTML a partir del JSON
4. Insertar en el DOM el código HTML resultante de ejecutar el template, usando jQuery o nuestra librería preferida

<h2>Cargar una plantilla en Handlebars:</h2>

La forma habitual de almacenar un template será en un bloque de script en el que meteremos un type que no corresponda con ningún otro conocido. 

Recomiendan usar **type="text/x-handlebars-template"**,( <script id="nombreTemplate" type="text/x-handlebars-template"></script>) pero en realidad podemos colocar el que queramos. Lo que conseguimos así es que ese script se incluya en el DOM, pero los navegadores no intentarán parsearlo, ni ejecutarlo ni nada de eso.

`Nota: Se debe pensar en que, si se intenta ejecutar un template Handlebars con Javascript se encontrará con un error, ya que el template está escrito en código HTML. Por ello se coloca un type a la etiqueta Script que el navegador no conozca, de modo que nos aseguremos que no va a intentar ejecutarlo.`

</br>

La otra opción es `usar una llamada a AJAX para traerte los templates`, con la única limitación que se debe sincronizar el retorno de la llamada con la compilación y ejecución de los templates. En otras palabras, `debemos esperar que la llamada a AJAX para traerte el template se ha producido con éxito para poder compilar llas plantillas que vamos a usar en nuestra página.

El código de una plantilla Handlebars tendrá una forma parecida a esta:

```html

<script type="text/x-handlebars-template" id="template">
  {{# each Beers}}
      <p>
        Name:
        <br /> 
        {{Name}} 
      </p>
  {{/each}}
</script>

```

<h2>Compilar un template:</h2>

En Handlebars tenemos que hacer un paso previo antes de poder ejecutar un template, que es **compilarlo**. Es algo muy simple. `Llamamos a Handlebars.compile() enviándole como parámetro el texto de nuestra plantilla.` El resultado de esto es una `función, que es la que tendremos que invocar para ejecutarla.

```javascript
var tmpl = Handlebars.compile(stemplate);
```

La variable `"stemplate"` es la `cadena con el contenido del template. Finalmente, una vez compilada, en la variable que recibimos como retorno, que hemos llamado tmpl, tendrás la función de la plantilla.

<h2>Ejecutar un template Handlebars:</h2>

Una vez tenemos la función del template, que es lo que obtenemos como retorno después de su compilación, `podemos invocarla pasando un único argumento, que es el objeto JSON que queremos usar para cargar los datos en el template.

Obtenemos como respuesta de la función del template un código HTML listo para ser insertado en el DOM.

```javascript
var html = tmpl(ctx);
```

Ese **HTML** es el que podremos usar más tarde para insertar en la página.

`Nota: Los templates los compilamos una única vez y los ejecutamos tantas veces como queramos. El proceso costoso en tiempo de ejecución es compilar los templates. Una vez se ha hecho ejecutar el template para producir el HTML es un proceso rápido que podemos realizar tantas veces como necesitemos sin tener que sufrir por el rendimiento de la aplicación.`

</br>

<h3>Primer ejemplo de uso de Handlebars</h3>

Podemos ver ahora un primer ejemplo de uso de **HandlebarsJS**, en el que se crea una plantilla simple, con este aspecto:

```html
<script type="text/x-handlebars-template" id="template">
{{# each Beers}}
Name: {{Name}} <br />
{{/each}}
</script>
```

Luego explicaremos las estructuras de control para las plantillas, pero podrás apreciar aquí `una iteración en la que se recorre una estructura llamada "Beers" y se va mostrando su dato "Name"`.

Así nos **traemos el código** de la plantilla:

```javascript
var stemplate = $("#template").html();
```

`Nota: aquí ves el método html() de jQuery, pero no quiere decir que Handlebars use jQuery de manera única, lo podemos usar con cualquier librería que deseemos. A lo largo de este ejemplo se usa jQuery diversas veces.`

Luego **compilamos** la plantilla:

```javascript
var tmpl = Handlebars.compile(stemplate);
```

Ahora podríamos traernos nuestro **JSON por medio de AJAX**. De nuevo, usaremos la librería que deseemos. Con la cadena JSON recibida simplemente le aplicamos un contexto:

```javascript
var ctx = {};
ctx.Beers = data; //data es el JSON que he recibido
```

Y por fin **ejecutamos nuestra plantilla, enviando ese JSON**.

```javascript
html = tmpl(ctx);
```

Acabamos **añadiendo el contenido por medio de cualquier librería** Javascript. En **jQuery** usaríamos unas líneas de código como estas:

```javascript
$("#content").append(html);
$("#content").show();
```

<h2>El JSON que recibo</h2>

Tu `JSON` puede venirte de cualquier lugar, de tu backend, de una Rest-API que te hayas hecho tú mismo o de cualquier "Web Service" que te entregue datos en JSON.

A lo largo de los siguientes ejemplos nuestro JSON será siempre el mismo:

```javascript
[{"Name":"Estrella","Brewery":"Damm","Style":"Euro Lager","Abv":"5.4","Ibu":"25","Favorite":false,"LastCheckin":{"When":"24/04/2013 - 20:00:01","Drinker":"@eiximenis"}},
{"Name":"Voll Damm","Brewery":"Damm","Style":"Bock","Abv":"7.2","Ibu":"40","Favorite":false,"LastCheckin":{"When":"24/04/2013 - 21:00:01","Drinker":"@CKGrafico"}},
{"Name":"Devil's","Brewery":"Marina","Style":"Indian Pale Ale","Abv":"9.0","Ibu":"150","Favorite":true,"LastCheckin":{"When":"24/04/2013 - 22:00:01","Drinker":"@midesweb"}},
{"Name":"Guinness Draught","Brewery":"Guinness","Style":"Irish Stout","Abv":"4.5","Ibu":"40","Favorite":true,"LastCheckin":{"When":"24/04/2013 - 23:00:01","Drinker":"@eiximenis"}}]
```

Puedes ver el ejemplo clickando en ejemplo_plantilla



