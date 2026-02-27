FROM node:22-alpine

WORKDIR /app

# Copy only package.json and package-lock.json first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Command to start the server
CMD ["node", "index.js"]