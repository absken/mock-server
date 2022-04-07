FROM node:alpine as debug
WORKDIR /mock-server
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
EXPOSE 8090
CMD ["npm", "run", "start"]
