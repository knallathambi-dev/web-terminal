FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 8081

CMD ["npm", "start", "--", "--port=8081"]