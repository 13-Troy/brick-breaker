FROM node:16-alpine
WORKDIR /var/www

COPY package*.json .
COPY utils/wait-for.sh wait-for.sh
RUN chmod +x ./wait-for.sh
RUN npm ci

COPY . .

RUN npm run build
ENV PORT 8080
EXPOSE $PORT
CMD node server.js
