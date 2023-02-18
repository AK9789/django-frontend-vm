FROM node
WORKDIR /app
COPY . .
RUN npm --force install
RUN npm --force install axios
RUN npm --force install @mui/material @emotion/react @emotion/styled
RUN npm update
EXPOSE 3000
CMD [ "npm","start" ]