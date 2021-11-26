# Create image based on the official Node 14 image from the dockerhub
FROM node:14

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/maplr-api

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/maplr-api

# Copy dependency definitions
COPY  package*.json /usr/src/maplr-api

# Install dependencies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/maplr-api

# Expose the port the app runs in
EXPOSE 8080

# Serve the app
CMD ["npm", "run", "dev"]
