FROM node:14.2.0

COPY src /opt/app/

WORKDIR /opt/app/
RUN ["npm", "install", "moment", "--save"]
ENTRYPOINT ["node", "/opt/app/Auditor.js"]