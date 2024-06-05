# Use the official Node.js image from the Docker Hub
FROM node AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

RUN npm run build

# Use the official NGINX image to serve the React app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the NGINX configuration file
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose the port that NGINX runs on
EXPOSE 80

# Command to run NGINX
CMD ["nginx", "-g", "daemon off;"]
