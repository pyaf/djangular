# Angular 4 with Django Rest Framework

User authentication and login using angular (4.3.1) and Django Rest Framework.


### To Run the project

*	`pip install -r requirements.txt`
*	`python manage.py runserver`


### Development

Open two terminals:

1. For angular

*	`cd angular`
*	`npm install` # one time installation of dependencies
*	`ng build -op=../backend/templates/angular/ -w -dop false`

2. For Django

*	`python manage.py runserver`

