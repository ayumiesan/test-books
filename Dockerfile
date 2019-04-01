FROM node:11 as builder

RUN apt update

ENV NODE_ROOT /usr/app
RUN mkdir -p $NODE_ROOT
WORKDIR $NODE_ROOT

COPY . .

RUN npm install -g @angular/cli
RUN npm install
RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder $NODE_ROOT/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
