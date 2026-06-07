FROM node:20-alpine

WORKDIR /exam

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]