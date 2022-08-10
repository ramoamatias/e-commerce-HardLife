# HardLife

Mapa de contenidos

* [Introducción](#Introducción)
* [Temas Vistos](#temas-vistos)
* [Funcionalidades](#funcionalidades)
* [Dependencias](#dependencias)
* [Despliegue e Instalacion de dependencias](#despliegue-e-instalacion-de-dependencias)




### Introducción [⬆️](#hardlife)
**HardLife** es un e-commerce realizado a modo de desarrollo como proyecto final para el curso de React Js de CoderHouse. En donde se implementan los diversos conocimientos adquiridos en el curso.

HardLife es un e-commerce enfocada en el area de productos Técnologicos como celulares, notebooks y tablets, los cuales permite generar una compra de diversos productos.

---

### Temas Vistos [⬆️](#hardlife)
Los temas que se implementaron dentro del proyecto fueron:

* Funcionamiento de JSX.
* Comunicacion y Ciclo de vida de Componentes.
* Uso de Estado dentro de cada componente
* Uso de rutas con React Router.
* Eventos y uso de Contexto 
* Firebase para la persistencia de los datos.

---

### Funcionalidades [⬆️](#hardlife)
Dentro del proyecto se pueden ver diversas funcionalidades: 

* Listado de productos con descripciones y opcion de ver sus detalles
* Navegacion con React Router para las distintas secciones de produtos.
* Visualización del detalle de productos en donde se listan las diferentes caracteristicas, imagenes y funciones para agregar al carrito de compra.
* Un carrito en donde se listan todos los productos comprados, agrupados por cantidad.
* Un sistema de login, en donde nos permita registrarnos como usuario y poder ingresar mediante usuario y contraseña para poder realizar la "compra" y generar una orden.
* Dentro de opciones del usuario como funcionalidad se tiene las opciones de poder ver el listado de ordenes realizadas en donde se detalla el total, la fecha de emisión y un desglose de los productos donde se detalla sus datos, cantidades compradas y subtotales.

--- 


### Dependencias [⬆️](#hardlife)

Realizamos el proyecto de React con su version **18.2.0** junto con las siguientes dependencias.

| Dependencia | Version | Motivo de uso          |
| ----------- | ------- | -------------          |
| firebase    |  9.9.1  | Para gestionar la base de datos, login y almacenamiento de imagenes|
| react-router-dom | 6.3.0 |  Para agregarle funcionalidad de enrutado y gestionar las rutas |


### Despliegue e Instalacion de dependencias [⬆️](#hardlife)

Para poder descargar y hacer uso de la aplicacion debemos de ralizar la siguiente secuencia de comandos.

Para poder clonar el repositorio debemos de usar

``` 
git clone https://github.com/ramoamatias/e-commerce-HardLife.git
cd e-commerce-HardLife
```

Una vez clonado el repositorio y posicionado dentro del proyecto _e-commerce-HardLife_ 

Debemos instalar las dependencias necesarias para correr el proyecto
```
npm install 
```

Y luego de instalarlas debemos de levantar la aplicacion con el comando de React
```
npm run start
```

Y finalmente podemos acceder a la aplicacion mediante la url Local: http://localhost:3000/


Y podemos ver el despliegue en vivo desde https://hardlife.netlify.app/