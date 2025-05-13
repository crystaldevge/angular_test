# Build step
FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build  # ან ng build --configuration production

# Nginx serve step
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Module Federation-ისთვის საჭიროა remoteEntry.js იყოს publicPath-ში
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
