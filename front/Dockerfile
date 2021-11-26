# Create image based on the official Node 14 image from dockerhub
FROM node:14

# Create a directory where our front will be placed
RUN mkdir -p /maplr-front

# Change directory so that our commands run inside this new directory
WORKDIR /maplr-front

# Copy dependency definitions
COPY package*.json /maplr-front/

# Install dependencies
RUN npm install

# Get all the code needed to run the app
COPY . /maplr-front/

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "run", "start"]
