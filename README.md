# Young Masterbuilders in Motion

- [Young Masterbuilders in Motion](#young-masterbuilders-in-motion)
  - [Getting Started With The App](#getting-started-with-the-app)
  - [Developing On The App](#developing-on-the-app)
  - [What Technologies Are We Using?](#what-technologies-are-we-using)

## Getting Started With The App
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
    pipenv install
    cd ..
    ```
- Start Docker containers: 

        docker-compose up


## Developing On The App
Once you have your containers running, the code in your local directory will be linked with the code inside the Docker containers. When you make changes, the app will reboot inside the containers to reflect those changes. The API will be accessible in your browser at `localhost:8000`, and the frontend application will be available at `localhost:3000`.

## What Technologies Are We Using?
The backend application is written in Python, using the [Django](https://www.djangoproject.com/) framework and the [Django REST Framework](https://www.django-rest-framework.org/) library. The frontend application is written in Javascript, using the [React](https://reactjs.org/) framework and several other third party libraries, bootstrapped via the [create-react-app](https://github.com/facebook/create-react-app) tool.

If you need to add new packages to the backend app, you can use Pipenv to do so:

    pipenv install <package_name>

If you need to add new packages to the frontend app, you can use NPM to do so:

    npm install <package_name>

Generally speaking, look to handle data manipulation on the backend and visualization on the frontend.