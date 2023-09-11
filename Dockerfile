
# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install
CMD ["yarn", "dev"]
EXPOSE 3000