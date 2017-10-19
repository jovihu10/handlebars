Para compilar plantillas en handlebars han de tener extensión .handlebars

En el terminal:

1- ir a la carpeta donde está l proyecto de js de handlebars.

2- instalar handlebars en node así:
handlebars -m "nombre carpeta donde se encuentran las plantillas"

3- Cuando le demos enter veremos las plantillas renderizadas

<img src="https://github.com/jovihu10/handlebars/blob/master/risky_tutorial_handlebars/p4_compilar_templates/img/screen1.png">

4- Ahora para guardar esto en un fichero, en terminal ponemos el simbolo > y el nombre del archivo que queremos que cree donde queremos que lo guarde (mayor que). Esto significa que la salida que haya, almacénala en otro ficheroo

habría que poner algo así:

<img src="https://github.com/jovihu10/handlebars/blob/master/risky_tutorial_handlebars/p4_compilar_templates/img/screen2.png">

5- Ahora en el html tenemos que cargar en un script el archivo que ha creado

6- Ahora para que se renderice ya **NO** necesitamos hacer esto:

```js
var template = document.getElementById('index').innerHTML;
var compile = Handlebars.compile(template);
var compiledHTML = compile(data);
```

Sino que **HACEMOS ESTO**

```js
var template = Handlebars.templates['archivo_que_queremos_renderizar_sin_extension'];
```

en el var data, los elementos del objeto han de ir acordes con lo que hay en el template. En este caso `{{name}}` y `{{surname}}
en el documentGetElement de abajo le pasamos la funcion template acabada de crear, quedando así

```js
document.getElementById('action').innerHTML +=template(data)
```

YA TENDRíamos renderizadas las plantillas

