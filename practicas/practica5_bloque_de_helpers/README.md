<h1>Bloque de helpers</h1>

Los bloques de helpers `son como los helpers normales, pero tienen una apertura y un cierre (como el #if y #each)`. Estos helpers `pueden modificar el contenido HTML y el contenido al que envuelven`. Son un poco más complicados de crear, pero son muy poderosos. Los puedes usar para reutilizar alguna funcionalidad o para crear grandes bloques de HTML de una manera reutilizable (por ejemplo, listas de elementos que se utilicen en muchos lugares de tu aplicación).

`Para crear un bloque de helpers`, `utiliza` de nuevo `Handlebars.registerHelper()`. `La diferencia es que esta vez vamos a utilizar un segundo parámetro en nuestra función de devolución de llamada, opciones`. Cuenta con una serie de propiedades útiles que vamos a necesitar. Echa un vistazo al siguiente ejemplo, en el que se convierte en mayúscula el texto.

<img src="https://github.com/jovihu10/handlebars/blob/master/practica5_bloque_de_helpers/img/screen.png">