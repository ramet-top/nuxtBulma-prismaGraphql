FROM mhart/alpine-node:12
# FROM mhart/alpine-node:10.8.0

ENV NODE_ENV=development
# ENV NODE_ENV=production

RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN yarn
RUN yarn run build

ENV HOST 0.0.0.0
EXPOSE 3000

# development
CMD ["yarn", "dev"]

# production
# CMD ["yarn", "start"]



