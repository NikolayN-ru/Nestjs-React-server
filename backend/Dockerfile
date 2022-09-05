FROM node:16.17

WORKDIR /app

COPY package*.json ./

RUN npm i

ADD . .

EXPOSE 5432

CMD ["node", "dist/main"]