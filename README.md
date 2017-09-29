# Angular with Django REST Framework JWT

Integrating Angular (v4) with Django (v1.11), this project uses the concept of JSON web token based authentication for User session management.

### Stack

* Angular (4.3.1)
* Django (1.11.5)


### To Run the project

*	`pip install -r requirements.txt`
*	`python manage.py runserver`


### My djangular way of development

Open two terminals:

For angular

*	`cd angular/`
*	`npm install` # one time installation of dependencies
*	`ng build -op=../backend/templates/angular/ -w -dop false`

For Django

*	`python manage.py runserver`
