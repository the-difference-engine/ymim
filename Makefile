pretty:
	cd frontend; npm run pretty
	cd backend; pipenv run black


init:
	touch .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit; echo "make pretty" >> .git/hooks/pre-commit