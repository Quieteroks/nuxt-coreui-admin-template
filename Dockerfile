FROM node:14.11.0-alpine

RUN apk add --update python make g++\
   && rm -rf /var/cache/apk/*
