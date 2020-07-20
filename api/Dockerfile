FROM node:latest
RUN mkdir /src
RUN npm install nodemon -g
WORKDIR /src
ADD ./package.json /src/package.json
RUN npm install
ADD ./nodemon.json /src/nodemon.json
ADD ./index.js /src/index.js
EXPOSE 7000
CMD node index.js