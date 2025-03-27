# Usa la imagen de Nginx
FROM nginx:latest

# Copiar los archivos de la página web al directorio donde Nginx los servirá
COPY . /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80
