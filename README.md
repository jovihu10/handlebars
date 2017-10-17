# handlebars

<img src="https://github.com/jovihu10/handlebars/blob/master/practicas/practica1_plantillas/img/logo.png">



La operativa normal con Handlebars es la siguiente:

1. Cargar una plantilla, que no es más que un código HTML mezclado con unos sencillos elementos de control
2. Compilar la plantilla, que nos permite convertirlo en una función JS
3. Ejecutar la plantilla para obtener la cadena HTML a partir del JSON
4. Insertar en el DOM el código HTML resultante de ejecutar el template, usando jQuery o nuestra librería preferida

<h2>Cargar una plantilla en Handlebars:</h2>

La forma habitual de almacenar un template será en un bloque de script en el que meteremos un type que no corresponda con ningún otro conocido. 

Recomiendan usar **type="text/x-handlebars-template"**,( <script id="nombreTemplate" type="text/x-handlebars-template">) pero en realidad podemos colocar el que queramos. Lo que conseguimos así es que ese script se incluya en el DOM, pero los navegadores no intentarán parsearlo, ni ejecutarlo ni nada de eso.

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
