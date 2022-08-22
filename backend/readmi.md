queries:

###
Telegram:

GET http://localhost:5000/telegram

Body
{
    "order": " 000234",
    "price": "= 49052p"
}

###
create User

POST http://localhost:5000/users

Body
{
    "user":{
    "username": "Petya2",
    "email": "data@gmail.com",
    "password": "simple commentwww 2"
    } 
}

###
login User

POST http://localhost:5000/users/login

{
    "user":{
    "email": "data@gmail.com",
    "password": "simple commentwww 2"
    } 
}

###
Текущий Пользователь
- по токену получаем пользовтеля

GET http://localhost:5000/users/user

Headers (KEY - VALUE)
Authorization - Token <ITEM-TOKEN>

###
Update Текушего пользователя
- по токену обновляем пользовтеля

PUT http://localhost:5000/users/user

Headers
Authorization Token <ITEM-TOKEN>

{
    "user":{
        "bio": "NEW-BIOrgapthi !!!"
        //  поля которые хотим мобновить
    } 
}

###
CREATE ARTICLE

POST http://localhost:5000/articles

Authorization Token <ITEM-TOKEN>

Body

{
    "article": {
        "title": "how are you23",
        "description": "Ever wonder h",
        "body": "Toy deffff",
        "taglist": "['reactjs', 'angular', 'gragons']"
    }
}

###
Получение статьи по слагу

GET http://localhost:5000/articles/how-are-you23-76d13d

/how-are-you23-76d13d <- slug Статьи

###
Удаление статьи

DELETE http://localhost:5000/articles/how-are-you23-qyopvtjjj

Authorization Token <ITEM-TOKEN>

/how-are-you23-qyopvtjjj <- slug article

###
Получение всех статей

PATCH http://localhost:5000/articles/all

###
Обновление статьи

PUT http://localhost:5000/articles/how-are-you23-8r2486

/how-are-you23-8r2486 <- slug article

Authorization Token <ITEM-TOKEN>

Body
{
    "article": {
        "title": "234u23343232432342432"
    }
}

###
Получение всех тегов

GET http://localhost:5000/tags/tag
