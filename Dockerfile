FROM node:13.12.0-alpine

# set working directory
WORKDIR /app
COPY . ./

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install --silent

# Export Port
EXPOSE 3000

# start app
CMD ["npm", "start"]
