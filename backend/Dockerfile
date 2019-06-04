FROM python:3.7.3

ENV PYTHONUNBUFFERED 1

RUN apt-get update -y && \
    apt-get install -y --no-install-recommends postgresql postgresql-contrib && \
    apt-get clean

RUN mkdir /code
WORKDIR /code
ADD . /code/

RUN pip install --upgrade pip
RUN pip install pipenv
RUN pipenv install --system

ENTRYPOINT ["./docker-entrypoint.sh"]