#Dockerfile pour le serveur 
# Définir l'image de base de l'application
FROM node:17

# définir le repertoire de travail 
WORKDIR /server
# Copier le fichier  package.json vers  "/server"  
COPY package.json  /server
RUN npm i
# copier tout le code source vers "/server"
COPY . /server

# Specifier le port sur lequel sera executer 
EXPOSE 5000

# Exécuter le fichier 
CMD ["npm", "run", "dev"]
