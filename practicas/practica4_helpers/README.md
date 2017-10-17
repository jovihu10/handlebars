<h1>Helpers</h1>

Handlebars no permite que `escribas Javascript directamente dentro de las plantillas`. Para ello, te proporciona los `helpers`. Esto son `funciones de Javascript a las que puedes llamar desde las plantillas`, y ayudar a la reutilización de código y a crear plantillas complejas. `Para llamar a un helper`, `solo tienes que utilizarlas como una expresión, {{nombredelhelper}}`. **Puedes pasar parámetros así {{nombredelhelper 12345}}**, en donde `12345 sería el primer parámetro de la función nombrehelper`.

`Para crear un helper, debes usar la función registerHelper.` Echa un vistazo en el ejemplo de más abajo, en el que puedes ver cómo crear un helper...

<img src="https://github.com/jovihu10/handlebars/blob/master/practica4_helpers/img/screen.png">