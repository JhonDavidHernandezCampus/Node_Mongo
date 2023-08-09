## Que se hace en este proyecto?

- En este mini proyecto hacemos un menejo de una base de datos de mongodb, hacienlo la conexion algunas consultas.

### Librerias usadas


```json
{
  "name": "node_mongo",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon ./app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "body-parser": "1.20.2",
    "class-transformer": "0.5.1",
    "class-validator": "0.14.0",
    "dotenv": "16.3.1",
    "express": "4.18.2",
    "express-rate-limit": "6.8.1",
    "mongodb": "5.7.0",
    "mysql2": "3.5.1",
    "nodemon": "3.0.1",
    "reflect-metadata": "0.1.13",
    "typescript": "5.1.6"
  }
}
```

#### Explicacion de cada una de estas librerias usadas y para que sirven 

cada una se puede instalar de la siguiente forma
``` 
 npm -i -E -E _NombreLibreria
 ```

`body-parser`: Esta biblioteca se utiliza para analizar los cuerpos de las solicitudes HTTP entrantes. Es especialmente útil para obtener datos enviados desde formularios o en formato JSON y convertirlos en objetos JavaScript utilizables.

`class-transformer`: Esta biblioteca ayuda a transformar objetos JavaScript en instancias de clases personalizadas y viceversa. Puede ser útil para validar y manipular datos en tu aplicación.

`class-validator`: Se usa junto con class-transformer para validar los objetos transformados en instancias de clases personalizadas. Permite definir reglas de validación en las clases, como campos requeridos o formatos específicos.

`dotenv`: Esta biblioteca carga variables de entorno desde un archivo .env, lo que es útil para almacenar configuraciones sensibles o ajustes específicos de la aplicación fuera del código fuente.

`express`: Express es un framework web para Node.js que simplifica la creación de aplicaciones web y APIs. Proporciona una capa de abstracción sobre HTTP y ofrece herramientas para manejar rutas, middleware y solicitudes HTTP.

`express-rate-limit`: Esta biblioteca permite establecer límites en las solicitudes entrantes a tu servidor Express. Puede ser útil para prevenir ataques de fuerza bruta o abusos.

`mongodb`: MongoDB es una base de datos NoSQL que se utiliza para almacenar datos en formato JSON-like (BSON). La biblioteca proporciona métodos para interactuar con la base de datos MongoDB desde Node.js.

`mysql2`: mysql2 es un controlador de MySQL para Node.js. Permite conectarse a bases de datos MySQL, ejecutar consultas y gestionar los resultados.

`nodemon`: Nodemon es una herramienta que supervisa los cambios en los archivos de tu aplicación y automáticamente reinicia el servidor cuando detecta cambios. Es útil para agilizar el proceso de desarrollo.

`reflect-metadata`: Esta biblioteca se utiliza junto con TypeScript y decoradores para habilitar la reflexión en tiempo de ejecución. Esto es útil para algunas técnicas avanzadas y para frameworks como TypeORM.

`typescript`: TypeScript es un superconjunto de JavaScript que agrega tipado estático y otras características a JavaScript. Se compila a JavaScript estándar y proporciona herramientas para escribir código más seguro y escalable.