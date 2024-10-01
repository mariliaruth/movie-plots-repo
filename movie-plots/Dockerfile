# Use uma imagem base do Node.js
FROM node:20

# Crie um diretório para a aplicação
WORKDIR /app

# Copie o package.json e instale dependências
COPY package*.json ./
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Exponha a porta que a aplicação utiliza
EXPOSE 3001

# Comando para rodar a aplicação
CMD ["npm", "start"]
