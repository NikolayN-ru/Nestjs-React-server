FROM node:16.17

WORKDIR /app

COPY package*.json ./

RUN npm install

# RUN npm i -g @nestjs/cli

ADD . .

# RUN npm run build
# RUN npm prune --production
CMD ["npm", "run" "build"]