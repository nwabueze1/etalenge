FROM node:18.16.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN apt-get update && apt-get install nano git openssh-client -y

COPY .ssh /root/.ssh
RUN ssh-keyscan bitbucket.org >> ~/.ssh/known_hosts
COPY . .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "run", "dev"]