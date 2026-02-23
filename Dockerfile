# 🔹 Etapa base: base de la construccion
FROM nginx:alpine

# Elimina el contenido por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia el build (carpeta dist) a la carpeta de Nginx
COPY dist/ /usr/share/nginx/html

# reemplaza el archivo default de configuración de Nginx si necesitas SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# Comando por defecto
ENTRYPOINT ["nginx", "-g", "daemon off;"]
