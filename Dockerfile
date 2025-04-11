# Dockerfile

# Base image
FROM node:latest

# Set working directory
WORKDIR /app

# Install global Angular CLI
RUN npm install -g @angular/cli

# Copy dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Angular app
RUN ng build --configuration=production

# Install serve to serve static build
RUN npm install -g serve

# Expose default Angular port
EXPOSE 4200

# Serve the built app
CMD ["serve", "-s", "dist/angular_test", "-l", "4200", "--single"]
