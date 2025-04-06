FROM node
WORKDIR /app
COPY react-js/package.json package.json
COPY react-js/package-lock.json package-lock.json

RUN npm install

RUN npm install rollup --save-dev

COPY react-js/ .

CMD ["npm", "run", "dev"]
