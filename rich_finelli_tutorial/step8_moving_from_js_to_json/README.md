Aquí vamos a separar todo bien:

<h3>1- Instalamos un local server con GULP.</h3>

Gulp se instala en dos partes.
a) la primera globalmente para todos los proyectos

```
sudo npm install gulp -g
```


 b)y la segunda local, específica para cada proyecto.
 Antes de crearla local, creamos un json iendo a la carpeta en terminal y haciendo:
```
  npm init
```

Una vez lo ponemos, podemos asignar un nombre y un entry point al JSON (seleccionar el archivo js que lo llamará. Ej `gulpfile.js). 

<h3>2- Movemos la data del js a un JSON.</h3>

Importante!!! El archivo gulp de js que creemos debe estar en la raiz. El gulpfile no hace falta llamarlo con script en el index 

Ahora instalamos **GULP** localmente

```
npm install gulp --save-dev
```


<h3>3- Ajax en el archivo JSON</h3>

Ahora vamos a configurar el archivo app.js para que trabaje con gulp

```
var gulp = require('gulp'),
    connect = require('gulp-connect')

gulp.task('connect', function(){
    connect.server()
    })
gulp.task('default', ['connect']);
```

Ahora **escribimos gulp en el terminal** y ya está habilitado el puerto.

Abrimos `http://localhost:8080/

Ahora en terminal hay que instalar Gulp Connect

```
npm install gulp-connect --save-dev
```





