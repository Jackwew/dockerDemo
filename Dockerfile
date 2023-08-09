FROM node:18

WORKDIR /code
ADD . /code

RUN npm start

EXPOSE 3006
