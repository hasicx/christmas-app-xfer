FROM node:12.7.0-alpine

WORKDIR '/app'

COPY . .

RUN npm install
EXPOSE 8000

CMD ["node", "index.js"]