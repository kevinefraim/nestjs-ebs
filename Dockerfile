FROM node:16.17.1


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Copy app source
COPY . .

# Build app
RUN npm run build

# Expose port and start the app
EXPOSE 3001
CMD [ "npm","run","start:prod" ]
