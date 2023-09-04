# Dockerfile pour le client

# Construire l'image client
FROM node:10.16-alpine

# creer le directory pour l'appli
WORKDIR /usr/src/app

COPY package*.json ./

###  Installer les dependencies

RUN npm install --silent

# copier les fichiers locaux vers le directory de l'application
COPY . .

EXPOSE 3000

CMD ["npm","start"]