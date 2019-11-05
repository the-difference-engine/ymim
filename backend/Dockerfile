FROM python:3.7.3

ENV PYTHONUNBUFFERED 1

RUN apt-get update -y
RUN apt-get install -y postgresql postgresql-contrib
RUN apt-get clean

RUN mkdir /code
WORKDIR /code
ADD . /code/

RUN pip install --upgrade pip
RUN pip install pipenv
RUN pipenv install
    
ENTRYPOINT ["./docker-entrypoint.sh"]