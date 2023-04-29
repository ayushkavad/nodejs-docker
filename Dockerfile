FROM node

WORKDIR /app/node-test

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]