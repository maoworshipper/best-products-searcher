# Best Products Searcher

## Descripción

Esta aplicación fue desarrollada usando la librería [`React`](https://react.dev/) y el framework [`Next.js`](https://nextjs.org/) mediante [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) y utiliza [`Redux Toolkit`](https://redux-toolkit.js.org/) para el manejo del estado de la aplicación. También se utilizaron otras librerías como Jest y Testing Library para pruebas unitarias y de integración, y Sass para los estilos mediante el uso de módulos.


## Características

### Funcionales
* Permite buscar artículos conectándose a una API para obtener información de los productos de acuerdo al término de búsqueda.

* Los resultados se muestran en un grid de tarjetas con información de cada artículo encontrado.

* Implementa paginación de los resultados de la búsqueda.

* Permite el uso de filtros para búsqueda avanzada, como: rango de precio, marca, categoría, etc.

* Es completamente adaptable (responsive) a los diferentes tamaños de dispositivos móviles y de escritorio.

* La vista de la información detallada de un producto se realiza en un modal.

* Se implementó un menú lateral para los filtros en dispositivos móviles.

### Técnicas
* Uso de `React 18` y `Next.js 13` como base del proyecto.

* Implementación de `SSR` mediante la API de Next.js y la consulta mediante `fetch`.

* Para el manejo del estado global se usó `redux-toolkit` y `react-redux`.

* Creación de `custom hooks` de React globales y locales para separar la lógica de la presentación en los componentes.

* Todas las llamadas a la API se realizan mediante el custom hook `useFetch`.

* Creación de `12 componentes` en total para el proyecto.

* Los estilos fueron creados con `Sass` haciendo uso de módulos y un tema principal.

* Más del `98% de cobertura` de pruebas según informe de coverage de `Jest`.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Deberás tener instalada como mínimo la versión 14.6.0 de Node.js para instalar Next.js 13. Puedes descargar la última versión estable de Node.js desde la [página oficial](https://nodejs.org/).
3. Abre una terminal en la carpeta raíz del proyecto o en VS Code.
4. Ejecuta el comando `npm install` para instalar todas las dependencias.
5. Ejecuta el comando `npm run dev` para iniciar la aplicación en modo de desarrollo.
6. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Scripts disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

```bash
npm run dev
#Ejecuta la aplicación en modo de desarrollo.

npm run build
#Compila la aplicación para producción en la carpeta `.next`.

npm start
#Inicia la aplicación en modo de producción. Necesitas haber ejecutado previamente el comando 'npm run build'.

npm run lint
#Ejecuta ESLint para identificar y reportar problemas en el código.

npm test
#Ejecuta Jest para correr las pruebas.
```

## Configuración

Si vas a usar la aplicación en un entorno local debes crear archivo `.env.local` y agregar las variables de entorno necesarias para la aplicación. Puedes encontrar una lista de las variables de entorno en el archivo `.env.example`.

La aplicación cuenta con configuraciones de `ESLint` y `Prettier` haciendo uso de la configuración más óptima recomendada en la documentación de Next.js.

Las configuraciones de ESLint se encuentran en `.eslintrc.json` y `.eslintignore`.
Las configuraciones de Prettier se encuentran en `prettier.config.js`.

Para realizar los test se usaron las librerías `Jest` y `Testing library`. Se creó la utilidad `renderWithProviders` para simular el provider de `react-redux` para realizar los tests.



## Dependencias

- @reduxjs/toolkit: ^1.9.4
- eslint: 8.38.0
- eslint-config-next: 13.3.0
- next: 13.3.0
- react: 18.2.0
- react-dom: 18.2.0
- react-redux: ^8.0.5

## Dependencias de desarrollo

- @testing-library/jest-dom: ^5.16.5
- @testing-library/react: ^14.0.0
- babel-jest: ^29.5.0
- eslint-config-prettier: ^8.8.0
- eslint-plugin-testing-library: ^5.10.3
- identity-obj-proxy: ^3.0.0
- jest: ^29.5.0
- jest-environment-jsdom: ^29.5.0
- prettier: ^2.8.7
- sass: ^1.62.0

## Estructura del proyecto

```bash
├── public
├── src
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── redux
│   ├── styles
│   └── utils
```

## Más sobre Next.js

Si tienes dudas acerca de como usar Next.js puedes visitar la [documentación oficial de Next.js](https://nextjs.org/docs)
