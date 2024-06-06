#### TFG - DAW - Abel Martínez Peinado

## Para este proyecto he implementado:
React Vanilla, Nodejs (express), tailwind para el estilado, mariadb como gestor de base de datos, docker y nginx.

- Para poner a funcionar el proyecto simplemente hay que encontrarse en el directorio raíz del proyecto y poner el siguiente comando:
`/# docker-compose up -d --build`

- Si no se tiene la carpeta node_modules en la carpeta raíz del proyecto y en la carpeta backend se debe de insertar el siguiente comando en ambas carpetas ('.' y './backend'):
`/# npm install` (para instalar las dependencias del proyecto)

- Hecho para que funcione en aws en caso de usar en otro sitio importante ir al archivo `./src/constants.js` y modificar la ip
