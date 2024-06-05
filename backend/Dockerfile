# Use the official Node.js image from the Docker Hub
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the backend runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "src/server.js"]
