FROM node:14.2.0

COPY src /opt/app/

WORKDIR /opt/app/
RUN ["npm", "install", "uuid", "--save"]
ENTRYPOINT ["node", "/opt/app/Musician.js"]