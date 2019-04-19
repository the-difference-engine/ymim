# Young Masterbuilders in Motion

- [Young Masterbuilders in Motion](#young-masterbuilders-in-motion)
  - [Getting Started With The App](#getting-started-with-the-app)
    - [Mac/Linux Users](#maclinux-users)
    - [PC Users (currently incomplete)](#pc-users-currently-incomplete)
  - [Developing On The App](#developing-on-the-app)
  - [What Technologies Are We Using?](#what-technologies-are-we-using)
  - [External Packages in Use](#external-packages-in-use)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Deployment](#deployment)
    - [General](#general)
    - [Frontend](#frontend-1)
    - [Required Frontend Env Vars](#required-frontend-env-vars)
    - [Backend](#backend-1)
    - [Required Backend Env Vars](#required-backend-env-vars)

## Getting Started With The App

I'm going to be very blunt: this will be much, much easier on a Mac or Linux system than it will be on a PC. On any PC that doesn't have Hyper-V (any system running any OS older/less powerful than Win10 Pro), you're going to need to run older, mostly unsupported programs. We strongly recommend that you either use a Mac or move to Linux.

### Mac/Linux Users
- Install homebrew

        /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

- Install Node & NPM

        brew install node

- Install Pipenv: 
  
        brew install pipenv

- [Download and Install Docker](https://download.docker.com/mac/stable/Docker.dmg)
- Set up Pipenv:
    ```
    cd backend
    pipenv install --dev
    cd ..
    ```
- Start Docker containers: 

        docker-compose up

### PC Users (currently incomplete)

- Install [Docker Toolbox for Windows](https://docs.docker.com/toolbox/overview/)

## Developing On The App
When you first clone the repo, you will have blank `.env` files in both the `backend/` and `frontend/` directories. Before you put any information into them, you need to run this command:

    git update-index --assume-unchanged */.env

After you run that, you will need to populate the `.env` files. Currently, we only require variables on the backend. Here are the variables you will need to run the application:

    SECRET_KEY=<SECRET_KEY>
    DEBUG=True
    DB_ENGINE="django.db.backends.postgresql"
    DB_NAME="postgres"
    DB_USER="postgres"
    DB_PASSWORD="password"
    DB_HOST="db"
    DB_PORT=5432

Use `pipenv run secret_key` to generate a value for SECRET_KEY and then save that into the file.

Once you have your containers running, the code in your local directory will be linked with the code inside the Docker containers. When you make changes, the app will reboot inside the containers to reflect those changes. The API will be accessible in your browser at `localhost:8000`, and the frontend application will be available at `localhost:3000`.

## What Technologies Are We Using?
The backend application is written in Python, using the [Django](https://www.djangoproject.com/) framework and the [Django REST Framework](https://www.django-rest-framework.org/) library. The frontend application is written in Javascript, using the [React](https://reactjs.org/) framework and several other third party libraries, bootstrapped via the [create-react-app](https://github.com/facebook/create-react-app) tool.




## External Packages in Use

### Frontend
If you need to add new packages to the frontend app, you can use Yarn to do so:

    yarn install <package_name>

Here are the existing packages already in use:

### Backend
If you need to add new packages to the backend app, you can use Pipenv to do so:

    pipenv install <package_name>

Here are the existing packages already in use:
- [Django](https://www.djangoproject.com/): A full-featured web framework for Python
- [djangorestframework](https://www.django-rest-framework.org/): A library that provides an extensive toolset for using Django as a backend API for an SPA.
- [django-filter](https://django-filter.readthedocs.io/en/master/): Easy Django Queryset filtering from URL params
- [django-storages](https://django-storages.readthedocs.io/en/latest/): Adapter for various storage backends.
- [django-model-utils](https://django-model-utils.readthedocs.io/en/latest/): A set of composable models, managers, and fields that extend Django's functionality.
- [django-dotenv](https://github.com/jpadilla/django-dotenv): A package for managing Django's environment variables from a `.env` file.
- [gunicorn](https://github.com/benoitc/gunicorn): A WSGI HTTP server used to serve the app.
- [psycopg2](https://github.com/psycopg/psycopg2): A PostgreSQL adapter for Python.
- [pyyaml](https://github.com/yaml/pyyaml): A YAML parser and emitter.
- [pendulum](https://pendulum.eustace.io/): A package that extends and improves on Python's default date and time handling.
- [django-heroku](https://github.com/heroku/django-heroku): A package that configures Django apps to run on a Heroku dyno.
- [djoser](https://github.com/sunscrapers/djoser): A package that provides RESTful hooks for Django's auth system.
- [djangorestframework-simplejwt](https://github.com/davesque/django-rest-framework-simplejwt): Allows us to use JWTs to authenticate users.
- [pillow](https://github.com/python-pillow/Pillow): Image manipulation on the server.
- [django-cors-headers](https://github.com/ottoyiu/django-cors-headers): Override CORS headers errors in local development.
- [django-role-permissions](https://github.com/vintasoftware/django-role-permissions): Manage user authorization and roles.

## Deployment

### General

This is deployed in two Heroku pipelines in the young-masterbuilders Heroku team, one for the frontend application and one for the backend. Each pipeline has a staging and production app, linked to the staging and master Github branches of this repo. The app is deployed by either pushing to those branches or manually deploying via the Heroku GUI.

### Frontend
We're using the [lstoll/heroku-buildpack-monorepo](https://github.com/lstoll/heroku-buildpack-monorepo) & [mars/create-react-app](https://github.com/mars/create-react-app-buildpack) buildpacks. They must be installed in that order to function.

### Required Frontend Env Vars

    APP_BASE=frontend

### Backend
On the backend, we use a Python package to extract the DB information from a DATABASE_URL that Heroku provides, so we need fewer environment variables. Make sure to manually create the SECRET_KEY, using the same `pipenv run secret_key`

### Required Backend Env Vars

    APP_BASE=backend
    SECRET_KEY=<SECRET_KEY>
