# base image
FROM node:9.6.1

# set working directory
RUN mkdir /wholesale
WORKDIR /wholesale

COPY ./wholesale /wholesale

RUN npm install

EXPOSE 3000:3000

# start app
CMD ["npm", "start"]
