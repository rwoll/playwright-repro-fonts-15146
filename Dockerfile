FROM mcr.microsoft.com/playwright:v1.23.0-focal
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
