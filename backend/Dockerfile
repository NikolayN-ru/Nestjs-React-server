FROM node:16.17

WORKDIR /app

COPY package*.json ./

RUN npm install

ADD . .

# RUN npm run build
# RUN npm prune --production
CMD ["npm", "run" "build"]