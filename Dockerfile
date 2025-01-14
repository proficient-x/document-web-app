# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest AS build

# Define build argument
ARG APP_NAME

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build -- $APP_NAME

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Define build argument
ARG APP_NAME

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/apps/$APP_NAME /usr/share/nginx/html/$APP_NAME

# Expose port 80
EXPOSE 80

# Set the entry point to the default Nginx entry point
ENTRYPOINT ["nginx", "-g", "daemon off;"]
