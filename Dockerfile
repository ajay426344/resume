# Use an official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy the website files to the Nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80 to access the webpage
EXPOSE 80

# The default command for Nginx is already set to run the server

