# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./

# next line fix for Mac M1 only
RUN apk add --no-cache python g++ make

RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]