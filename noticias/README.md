# App de noticias

Esta aplicación consiste en un feed de noticias que el usuario puede explorar, compartir y almacenar.

## Descripción
Se trata de una aplicación donde el usuario dispone siempre de un resumen de la última actualidad. Para cada noticia, es posible compartir, almacenar en *Favoritos* y por supuesto, acceder a la noticia completa en el sitio original que la ofrece.
Se dispone también de una pestaña de *Categorías* que permite mostrar las noticias organizadas por la temática seleccionada.

## Objetivos de aprendizaje
Además de conceptos generales de Ionic, Angular, Typescript y plataformas móviles siempre presentes en cualquier aplicación, este trabajo pretende trabajar de forma más concreta los siguientes puntos:
* Consumo de APIs de terceros
* Módulos, *routing* y *lazy loading*
* *Infinite scroll*
* Plugins nativos
* Persistir y consultar datos en la memoria del dispositivo
* Enviar o compartir a través de redes sociales u otras aplicaciones instaladas

## Instrucciones de uso

Situado en la carpeta raíz, ejecutar:
```
# instalar dependencias
npm i

#iniciar la aplicación en el navegador
ionic serve
```
**Nota importante**: la compilación del proyecto no tendrá éxito y generará un error. Esto es debido a que se ha eliminado el *Api key* de los ficheros *environments.ts* y *environments.prod.ts*
Para obtener un *Api key* simplemente es necesario registrarse en [News API – Search News and Blog Articles on the Web](https://newsapi.org/). Una vez realizado este proceso, hay que colocar el *Api key* personal en los ficheros anteriormente mencionados

Si se desea instalar la app en un dispositivo físico, ejecutar tras los pasos anteriores:
```
# Integrar Capacitor al proyecto
ionic capacitor platform add android

# Generar el proyecto Android
ionic cap sync
```
En el caso de *iOS*, las instrucciones son ligeramente diferentes y se necesita un equipo con *Xcode* instalado, pero la aplicación se generará y funcionará correctamente.
