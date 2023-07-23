FROM node:18

WORKDIR /usr/app
COPY . .
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]

