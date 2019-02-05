#!/bin/bash

case "$1" in
    web_app)
        until psql postgres://postgres:$POSTGRES_PASSWORD@db -c '\q'; do
            >&2 echo "Postgres is unavailable - sleeping"
            sleep 1
        done

        >&2 echo "Postgres is up!"
        case "$2" in
            migrate)
                python manage.py migrate
            ;;
            static)
                python manage.py collectstatic --clear --noinput
                python manage.py collectstatic --noinput
            ;;
            migrate_and_static)
                python manage.py migrate
                python manage.py collectstatic --clear --noinput
                python manage.py collectstatic --noinput
            ;;
        esac
        
        case "$3" in
            prod)
                echo "Starting Gunicorn."
                exec gunicorn service_health.wsgi:application \
                    --bind 0.0.0.0:8000 \
                    --workers 3 \
                    --access-logfile '-'
            ;;
            local)
                pipenv install --system
                echo "Starting local server"
                python manage.py runserver 0.0.0.0:8000
            ;;
        esac
    ;;
esac

