# Create Directory for the Container
FROM node:16.15.0

#Env
ENV ENV_NAME dev

# Create directory for the Application
WORKDIR /usr/src/app

# Copy the package.json file to the the work Directory.
COPY package.json .

# Install the required packages
RUN npm install

# Copy all other source code to work directory
ADD . /usr/src/app

# Start Application
CMD [ "npm", "start" ]

#expose app to desired port
EXPOSE 3000 