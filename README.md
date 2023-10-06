# API To-Do List

Este es el README para la API To-Do List en Node.js. A continuación, se describe cómo configurar y ejecutar la API en tu entorno local.

## Repositorio de GitHub

El código fuente de esta API se encuentra en el siguiente repositorio de GitHub: [https://github.com/jairzea/to-do-list.git](https://github.com/jairzea/to-do-list.git)

## Configuración

Siga estos pasos para configurar la API en su entorno local:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/jairzea/to-do-list.git
   cd to-do-list
   ```

2. Ejecuta el script `config/generateSecretKey.js` para obtener la clave secreta JWT:

   ```bash
   node config/generateSecretKey.js
   ```

   Esta clave secreta se utilizará para firmar y verificar tokens JWT.

3. Crea un archivo `.env` en la raíz del proyecto y configura la variable de entorno `JWT_SECRET_KEY` con la clave secreta que generaste en el paso anterior:

   ```
   JWT_SECRET_KEY=your-secret-key-here
   ```

4. Copia el archivo `.env-example` proporcionado en el repositorio a un nuevo archivo llamado `.env` y ajusta las demás variables de entorno según tus necesidades. Este archivo puede contener configuraciones predeterminadas para el usuario de inicio de sesión u otras configuraciones relevantes.

## Instalación

Siga estos pasos para instalar las dependencias de la API:

1. Asegúrate de tener Node.js y npm instalados en tu máquina.

2. Ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   npm install
   ```

## Ejecución

Una vez que hayas configurado y instalado la API, puedes ejecutarla localmente:

1. Ejecuta el siguiente comando para iniciar la API:

   ```bash
   npm start
   ```

   La API estará disponible en `http://localhost:3000`.

## Uso

La API To-Do List se puede utilizar para administrar tareas pendientes. Puedes acceder a la documentación de la API o la información de las rutas en el código fuente para obtener más detalles sobre cómo usarla.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio en GitHub.

2. Clona tu fork en tu máquina local.

3. Crea una nueva rama para tus cambios:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

4. Realiza tus cambios y asegúrate de escribir pruebas adecuadas.

5. Haz un push de tus cambios a tu fork en GitHub:

   ```bash
   git push origin feature/nueva-funcionalidad
   ```

6. Crea una solicitud de extracción (pull request) en el repositorio principal.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

Si tienes alguna pregunta o problema, no dudes en crear un problema (issue) en el repositorio de GitHub o contactar al autor.

¡Gracias por utilizar la API To-Do List!