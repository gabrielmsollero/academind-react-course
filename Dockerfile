FROM node:18.17.1

WORKDIR /usr/src/app/

COPY . .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]
