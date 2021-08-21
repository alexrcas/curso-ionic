
# App Escáner de QR

Esta aplicación consiste en un escáner de códigos QR

## Descripción
Se trata de una aplicación donde el usuario puede escanear códigos QR que enlazan a sitios web o bien contienen una geolocalización. En el primer caso se abrirá el navegador web y en el segundo un mapa 3D interactivo. Los códigos QR quedarán almacenados para su posterior uso junto con información de a qué tipo pertenecen (web o coordenadas geográficas).

## Objetivos de aprendizaje
Además de conceptos generales de Ionic, Angular, Typescript y plataformas móviles siempre presentes en cualquier aplicación, este trabajo pretende trabajar de forma más concreta los siguientes puntos:
* Ciclo de vida de páginas y componentes
* Plugins nativos
* Uso de la cámara
* Uso de librerías de *Javascript* generales sin versión específica para Angular o Ionic
* Mapas interactivos

## Instrucciones de uso

Situado en la carpeta raíz, ejecutar:
```
# instalar dependencias
npm i

#iniciar la aplicación en el navegador
ionic serve
```
**Nota importante**: la compilación del proyecto no tendrá éxito y generará un error. Esto es debido a que se ha eliminado el *Api key* en la asignación del fichero *mapa.page.ts* (línea 30) 
Para obtener un *Api key* simplemente es necesario registrarse en MapBox y obtener un token personal, para luego escribirlo en su lugar correspondiente en el programa.

Si se desea instalar la app en un dispositivo físico, ejecutar tras los pasos anteriores:
```
# Integrar Capacitor al proyecto
ionic capacitor platform add android

# Generar el proyecto Android
ionic cap sync
```
En el caso de *iOS*, las instrucciones son ligeramente diferentes y se necesita un equipo con *Xcode* instalado, pero la aplicación se generará y funcionará correctamente.
