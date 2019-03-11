FROM node:10.13.0

RUN apt-get update

RUN mkdir /code
WORKDIR /code
COPY . /code/

ENTRYPOINT ["./docker-entrypoint.sh"]