FROM node:18.17.1

WORKDIR /usr/src/app/

COPY package.json package.json

RUN npm install

# copying after npm install so that the installation can be cached
# even if local files change.

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]