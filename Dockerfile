# specify the node base image with your desired version node:<version>
FROM node:8

WORKDIR /myservice

# copy over all them files and yarn install them
COPY . .
RUN yarn

CMD yarn start

# depending on how you deploy you might want to expose a port, although most
# cloud hosts just ignore that and set the port as an env variable
# EXPOSE 5000