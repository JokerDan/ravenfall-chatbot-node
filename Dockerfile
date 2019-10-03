FROM node:12.8-alpine

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
RUN npm build
# If you are building code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# EXPOSE 8080

CMD ["npm", "run start"]
# CMD [ "node", "main.js" ]
