FROM antihero/nginx-proxy-node:latest

COPY package.json /tmp
RUN cd /tmp && npm i
RUN mkdir -p /quick && mv /tmp/node_modules /quick/

COPY . /quick

VOLUME /quick/config

WORKDIR /quick
ENV NODE_ENV=production

CMD rm /default.sock; /etc/init.d/nginx start && node index.js

