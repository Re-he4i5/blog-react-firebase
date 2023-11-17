FROM node:16.15.0-alpine
WORKDIR /usr/src/app/blog-firebase
COPY . .

CMD [ "npm", "start" ]