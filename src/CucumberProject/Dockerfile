FROM node:alpine

MAINTAINER fkingma@xebia.com

RUN mkdir -p /usr/bin/cucumber-js
WORKDIR /usr/bin/cucumber-js
COPY . /usr/bin/cucumber-js
RUN npm install

# ENTRYPOINT ["/usr/bin/cucumber-js"]
# CMD []