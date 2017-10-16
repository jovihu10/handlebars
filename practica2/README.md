<h1>Expresiones</h1>

Para desarrollar una plantilla a partir del ejemplo anterior, cualquier dato que imprimas en una expresión {{}}, conseguirás automáticamente HTML escapado por handlebars. Esto es una gran característica en temas de seguridad, pero es posible que algunas veces quieras imprimir HTML puro. En este caso tendremos que utilizar la expresión de triples llaves {{{}}}.

Además, observa que las expresiones de Handlebars soportan valores anidados que nos permiten acceder fácilmente a los datos de un objeto de Javascript.