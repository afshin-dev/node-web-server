FROM  node:19-alpine3.15

WORKDIR /home/app
COPY package.json package-lock.json ./

RUN npm install 

COPY app.js ./

EXPOSE 3000

CMD ["npm" , "run", "serve"]
