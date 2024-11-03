# Use the official Node.js image as a base
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Install a simple server to serve the built static files
RUN npm install -g serve

# Expose the port for the application
EXPOSE 3000

# Start the server and serve the built React app on the exposed port
CMD ["serve", "-s", "build", "-l", "3000"]
