Observatorio del machismo
=======================
Este repositorio contiene el proyecto de observatorio del machismo. El repositorio está dividido en dos servicios: `/api` y `/ui`. 

El directorio `/api` contiene el proyecto Flask para el api de la web.

El directorio `/ui` contiene el proyecto React para la interfaz de usuario.

**Pasos para uso de `/api`**:

1. Instalar [docker](https://docs.docker.com/docker-for-windows/install/).

2. Ejecutar el comando `docker build --no-cache --rm -f "Dockerfile" -t api-observatorio-machismo:latest "."` en el directorio `/api`.
3. Ejecutar `docker run --rm -it -p 5000:5000 api-observatorio-machismo`.

Esto permitirá crear un servidor que por defecto es accesible en `localhost:5000`. Teniendo este proceso corriendo en segundo plano se puede seguir con la ejecución de la `/ui`.

**Pasos para uso de `/ui`**:

1. Instalar [node](https://nodejs.org/en/)
2. Ejecutar el comando `npm install highcharts highcharts-react-official` para instalar [hihgcharts](https://github.com/highcharts/highcharts-react).
3. Ejecutar `npm start` para iniciar la aplicación.

Se puede acceder a la aplicación desde `http://localhost:3000/`.

Prueba
