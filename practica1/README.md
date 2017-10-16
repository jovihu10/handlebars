
<h1>Plantillas</h1>

Una vez tengas la librería instalada, puedes empezar a desarrollar las plantillas. La manera recomendada de añadir plantillas a tu página es incluyéndolas en tags script con un tipo especial. El atributo type es importante, de lo contrario el navegador lo analizará como un archivo Javascript (que no lo es).

Las plantillas cuentan con una sintaxis fácil de entender. Pueden contener HTML y texto, mezclado con expresiones de Handlebars. Las expresiones vienen delimitadas por llaves dobles y triples {{{}}}. Estas expresiones indican a Handlebars que deben incluir el valor de las variables o ejecutar funciones de ayuda. Las plantillas necesitan ser compiladas para que se utilicen en Javascript antes de utilizarlas. Puedes ver un ejemplo a continuación. Ten en cuenta que estamos utilizando jQuery para que el trabajo con el DOM sea más sencillo, pero Handlebars puede funcionar perfectamente son él.

<img src="https://github.com/jovihu10/handlebars/blob/master/practica1/img/screen.png">