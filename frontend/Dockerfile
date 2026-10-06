# Usa una imagen oficial de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto que usa tu frontend (comúnmente 5173 para Vite o 3000)
EXPOSE 5173

# Comando para arrancar el servidor en modo desarrollo
CMD ["npm", "run", "dev"]
