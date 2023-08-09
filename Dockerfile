FROM node:18-alpine as builder

WORKDIR /code

ADD package.json /code
RUN npm install

ADD . /code

# RUN npm run build

RUN npm start

FROM nginx:alpine

EXPOSE 3006
