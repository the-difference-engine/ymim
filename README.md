# Young Masterbuilders in Motion

- [Young Masterbuilders in Motion](#Young-Masterbuilders-in-Motion)
  - [Getting Started With The App](#Getting-Started-With-The-App)
    - [Mac/Linux Users](#MacLinux-Users)
    - [PC Users (currently incomplete)](#PC-Users-currently-incomplete)
  - [Developing On The App](#Developing-On-The-App)
  - [What Technologies Are We Using?](#What-Technologies-Are-We-Using)
  - [External Packages in Use](#External-Packages-in-Use)
    - [Frontend](#Frontend)
    - [Backend](#Backend)
  - [Deployment](#Deployment)
    - [General](#General)
    - [Frontend](#Frontend-1)
    - [Required Frontend Env Vars](#Required-Frontend-Env-Vars)
    - [Backend](#Backend-1)
    - [Required Backend Env Vars](#Required-Backend-Env-Vars)

## What Technologies Are We Using?

The backend application is written in Python, using the [Django](https://www.djangoproject.com/) framework and the [Django REST Framework](https://www.django-rest-framework.org/) library. The frontend application is written in Javascript, using the [React](https://reactjs.org/) framework and several other third party libraries, bootstrapped via the [create-react-app](https://github.com/facebook/create-react-app) tool.

## Getting Started With The App

I'm going to be very blunt: this will be much, much easier on a Mac or Linux system than it will be on a PC. On any PC that doesn't have Hyper-V (any system running any OS older/less powerful than Win10 Pro), you're going to need to run older, mostly unsupported programs. We strongly recommend that you either use a Mac or move to Linux.

### Mac/Linux Users

- Install homebrew

        /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

- Install Node & NPM

        brew install node

- Install Pipenv:

        brew install pipenv

- Clone and go into the application

        git clone https://github.com/the-difference-engine/ymim.git
        cd ymim

You should now be in the root of the project

When you first clone the repo, you will need to create and populate `.env` files in both the `backend/` and `frontend/` directories to make the applications work correctly. Currently, we only require variables on the backend.

Here are the variables you will need to run the application. Copy this

    SECRET_KEY=<SECRET_KEY>
    DEBUG=True
    DB_ENGINE="django.db.backends.postgresql"
    DB_NAME="postgres"
    DB_USER="postgres"
    DB_PASSWORD="password"
    DB_HOST="localhost"
    DB_PORT=5432

Then `cd backend` and `vi .env` and paste this file in there. Then run `:wq!` to save. Then `cd ..` so you are back in the root of the project.

Use `pipenv run secret_key` to generate a value for SECRET_KEY and then save that into the file.

- Install the FrontEnd Dependencies

        cd frontend
        npm install

- Install Pipenv:

        brew install pipenv

- Set up Pipenv and install the backend dependencies:

  ```
  cd backend
  pipenv install --dev
  cd ..
  ```

- [Download and Install Docker](https://download.docker.com/mac/stable/Docker.dmg)
- Start Docker containers (from root directory):

        docker-compose up

### NO Docker

Follow the steps above but instead of running `docker-compose up`, do this to start the FrontEnd and Backend

To Start the FrontEnd. First make sure you are in the root of the project. Then:

```bash
      cd frontend
      npm install
      npm start
```

You should be able to Visit the Frontend by going to [http://localhost:3000/](http://localhost:3000/). If you see the Home Page, you have won!

- Note: React will automatically launch this page for you if you are using Chrome and you may get a message asking you to allow this!

Open a new Terminal Window and again _make sure you are in the root of the project_ Then:

```bash
      cd backend
      pipenv install --dev
      pipenv shell
      python manage.py migrate
      python manage.py create_test_users
      python manage.py runserver
```

You should be able to Visit the Backend by going to [http://localhost:8000/](http://localhost:8000/). If you see the words API Root, you have won!

### Postgres (specific to MAC)

Postgres is our database. You will need to have Postgres installed on your computer to persist data and run the application.

If you do not have Postgres installed, you can install it via brew

1. In your command-line run the command: `brew install postgresql`
2. Run the command: `ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents`
3. Create two new aliases to start and stop your postgres server. They could look something like this:

   ```
   alias pg_start="launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist"
   alias pg_stop="launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist"
   ```

4. Run the alias you just created: `pg_start`. Use this comment to start your database service.
   - alternatively, `pg_stop` stops your database service.
5. Run the command: `createdb postgres`
6. Connect to your postgres with the command: `psql`
7. `createuser -s postgres` - fixes `role "postgres" does not exist`
8. Test with `psql` command (and some additional commands if issues)

   ```
   $ psql
   psql (10.0)
   Type "help" for help.

   postgres=# ALTER ROLE postgres WITH SUPERUSER;
   postgres=# ALTER ROLE postgres WITH LOGIN;
   ```

### PC Users (currently incomplete)

- Install [Docker Toolbox for Windows](https://docs.docker.com/docker-for-windows/)

Once you have your containers running, the code in your local directory will be linked with the code inside the Docker containers. When you make changes, the app will reboot inside the containers to reflect those changes. The API will be accessible in your browser at `localhost:8000`, and the frontend application will be available at `localhost:3000`.

## External Packages in Use

### Frontend

If you need to add new packages to the frontend app, you can use npm to do so:

    npm install <package_name>

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

The application is deployed in two Heroku pipelines in the young-masterbuilders Heroku team, one for the frontend application and one for the backend. Each pipeline has a staging and production app, linked to the staging and master Github branches of this repo. The app is deployed by either pushing to those branches or manually deploying via the Heroku GUI.

### Frontend

We're using the [lstoll/heroku-buildpack-monorepo](https://github.com/lstoll/heroku-buildpack-monorepo) & [mars/create-react-app](https://github.com/mars/create-react-app-buildpack) buildpacks. They must be installed in that order to function.

### Required Frontend Env Vars

    APP_BASE=frontend

### Backend

On the backend, we use a Python package to extract the DB information from a DATABASE_URL that Heroku provides, so we need fewer environment variables. Make sure to manually create the SECRET_KEY, using the same `pipenv run secret_key`

### Required Backend Env Vars

    APP_BASE=backend
    SECRET_KEY=<SECRET_KEY>

### Using an .env file to set environment variables

REACT_APP_STRAPI_HOST=http://localhost:1337/
REACT_APP_FRONTEND_HOST=http://localhost:3000/
REACT_APP_STRAPI_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgzNzk5NzU4LCJleHAiOjE1ODYzOTE3NTh9.dWR7T76GKYKaV5C6s8Yqma6mY6nsaklySF5PCDA4u7c
## Submit to Strapi from Postman

### Set up strapi

https://strapi.io/documentation/3.0.0-beta.x/getting-started/quick-start.html#_1-install-strapi-and-create-a-new-project
​

### Set up content-types

- Ensure that the `Authenticated` role is enabled to perform the actions that are needed.

  For Example:

  - Click `Authenticated` role
  - Check all permissions for any of the content types that were created.
    ​

- Ensure that the `Public` role is enabled to perform the actions that are needed
  Likely only GET requests
  ​

### Set up user

- Associate user to `Authenticated`
  ​

### Set up documentation in strapi

https://strapi.io/documentation/3.0.0-beta.x/plugins/documentation.html#installation
​

- Go to documentation tab in UI of strapi
- Copy token
  ​

### Submitting data through Postman

- Open Postman
- Create new POST request to `http://localhost:1337/{{content-type}}` (content-type is a specific content type created in Strapi)
- Under `Authorization` tab (below url), select `Bearer Token` and paste the token from documentation tab
- Under `Body` tab,
- Select `raw` radio option
- Select `json` from type dropdown
- Under the radio selection place the data to submit. (quotes are important)

  For Example:

  ```json
  {
    "name": "name from postman",
    "description": "description from postman"
  }
  ```

- Click `Send`