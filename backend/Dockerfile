FROM python:3.7

ENV PYTHONUNBUFFERED 1

RUN apt-get update -y && \
    apt-get install -y postgresql postgresql-contrib && \
    apt-get clean

RUN mkdir /code
WORKDIR /code
ADD . /code/

RUN pip install pipenv
RUN pipenv install --system
    
ENTRYPOINT ["./docker-entrypoint.sh"]