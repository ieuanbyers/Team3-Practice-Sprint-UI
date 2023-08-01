FROM node:latest
WORKDIR /code
COPY . /code

ARG baseURL
ENV BASE_URL ${BASE_URL}

ARG PUPPETEER_SKIP_DOWNLOAD
ENV PUPPETEER_SKIP_DOWNLOAD "PUPPETEER_SKIP_DOWNLOAD"

RUN npm ci
EXPOSE 3000

CMD ["npm", "start"]