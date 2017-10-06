# Create image based on the official Node 6 image from the dockerhub
FROM node:7.10.1

# Add nodemon to the image in global
RUN npm install --global nodemon

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json .

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . .

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
# CMD ["npm", "start"]
CMD ["nodemon", "-L", "/usr/src/app"]