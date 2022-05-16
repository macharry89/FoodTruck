FROM node:16-alpine

# Create work directory
WORKDIR /usr/src/app

# Copy app source to work directory
COPY . /usr/src/app

# Install app dependencies
RUN yarn install

# Build and run the app
CMD yarn start

EXPOSE 4040