FROM node:22.2.0 AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g @angular/cli@latest
RUN npm run build --prod

FROM nginx:alpine

COPY --from=build /app/dist/portifolio/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]