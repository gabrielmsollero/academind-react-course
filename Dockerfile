FROM node:16.8.0

WORKDIR /usr/src/app/

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
