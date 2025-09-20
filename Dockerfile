# 1. Use official Nginx image as base
FROM nginx:alpine

# 2. Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# 3. Copy project files to Nginx's html directory
COPY . /usr/share/nginx/html

# 4. Expose port 80 for the container
EXPOSE 80

# 5. Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
