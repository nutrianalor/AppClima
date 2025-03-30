# Proyecto Digitalización

**LUXURY TEMP**  

---

#### _Proyecto realizado por Nuria Alba Ortega_

## Introducción  

El objetivo principal de este proyecto es desarrollar una página web interactiva y fácil de usar que proporcione información detallada sobre el clima de cualquier ubicación que el usuario desee seleccionar. La plataforma mostrará datos en tiempo real, incluyendo la temperatura actual expresada en grados, la ubicación específica del lugar consultado, una imagen animada representativa de las condiciones climáticas y, además, la velocidad del viento. Con un diseño intuitivo y atractivo, esta página web permitirá a los usuarios obtener información meteorológica de manera rápida y visualmente agradable, mejorando así su experiencia y facilitando la toma de decisiones en función del clima.  

![ImagenIntro](https://github.com/nutrianalor/AppClima/blob/main/Imagenes/0.%20Introduccion.png)

---

## Tercer trimestre  

### JavaScript
He añadido un fragmento de código que traduce la descripción del clima usando el objeto `TRADUCCION_CLIMA`. En caso de que no hubiera traducción, se mantendría el texto original. Además, actualiza la temperatura, la descripción del clima, la ubicación y la velocidad del viento en la interfaz.  

<p align="center">
  <img src="https://github.com/nutrianalor/AppClima/blob/main/Imagenes/1.%20JavaScriptTraduccion.png" alt="Descripción" width="500">
</p>

---

### CSS

<p align="center">
  <img src="https://github.com/nutrianalor/AppClima/blob/main/Imagenes/2.%20CSS1.png" alt="Descripción" width="300">
  <img src="https://github.com/nutrianalor/AppClima/blob/main/Imagenes/3.%20CSS2.png" alt="Descripción" width="300">
</p>

En este trozo de código añadido, transformo la interfaz para adaptarse a dispositivos móviles, reorganizando la disposición de los elementos y ajustando los tamaños.  

---

### Docker

Docker es una plataforma que permite crear, distribuir y ejecutar aplicaciones en contenedores. Yo he ejecutado mi página web desde esta aplicación para que funcione de la misma manera en cualquier dispositivo que esté conectado a la misma red que yo.  

>Enlace a la página web de docker: [https://www.docker.com/]

Lo primero que he hecho ha sido crear un archivo en la carpeta de mi proyecto llamado `Dockerfile`.  

<p align="center">
    <img src="https://github.com/nutrianalor/AppClima/blob/main/Imagenes/4.%20Dockerfile.png"alt="Descripción" width="300">
</p>

Tal y como comento en los `#`, la línea 2 sirve para usar la imagen oficial de Nginx como base para el contenedor, la línea 5 copia todos los archivos del directorio donde me encuentro al directorio de Nginx donde se sirven las páginas web, y la línea 8 expone el puerto 80, que es el predeterminado para Nginx.  

El segundo paso es crear un contenedor, y he hecho lo siguiente en el CMD:  

```
docker build -t usinx-proyectodigitalizacion:1.00 .
```

Después he creado el contenedor:  

```
docker run -d --name AppClima -p 5000:80 usinx-proyectodigitalizacion:1.00
```

Por último, iniciamos el contenedor.  

```
docker start AppClima
```

---

## Ngrok  

Ngrok es una herramienta que permite exponer un servidor local a Internet a través de un túnel seguro. He querido usar esta herramienta para facilitar a otros usuarios el uso de mi página web sin necesidad de estar conectados a la misma red y desde dispositivos diferentes.  

Al abrir `ngrok.exe`, me lleva al CMD, donde solo he tenido que escribir lo siguiente:  

```
ngrok http 5000
```

Y me devuelve un enlace que copié y abrí en el navegador.  
