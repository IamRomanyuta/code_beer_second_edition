# BeerCode.net

## Описание:

Проект создается для сети розничных магазинов в которой реализуется продажа слабоалкогольных напитков(пиво/сидр/медовуха и пр.).
Основной целью стоит создание БД имеющая полное описание того или иного напитка включая его характеристики, описание, изображение, и самое главное QR-Code со ссылкой на сайт на котором предсставлена информация о данном напитке со всеми вышеописанными характеристиками.

---

## Оглавление:

- Технологии
- Основные страницы
- Карта развития
- API
- Структура проекта

---

## Технологии:

<img src="https://img.shields.io/badge/Javascript-yellow?style=for-the-badge&logo=javascript&logoColor=black"/><img src="https://img.shields.io/badge/NodeJS-grey?style=for-the-badge&logo=nodedotjs"/><img src="https://img.shields.io/badge/React-black?style=for-the-badge&logo=react&logoColor=61DBFB"/><img src="https://img.shields.io/badge/Postgre Sql-696969?style=for-the-badge&logo=postgresql"/><img src="https://img.shields.io/badge/Axios-2F4F4F?style=for-the-badge&logo=axios"/><img src="https://img.shields.io/badge/MobX-2F4F4F?style=for-the-badge&logo=mobx"/><img src="https://img.shields.io/badge/Express-2F4F4F?style=for-the-badge&logo=express"/><img src="https://img.shields.io/badge/sequelize-2F4F4F?style=for-the-badge&logo=sequelize"/><img src="https://img.shields.io/badge/Bootstrap-2F4F4F?style=for-the-badge&logo=bootstrap"/>

---

## Основные страницы:

### Главная страница:

![MainPage](documentation/pictures/MainPageScreen.JPG)
Главная страница представляет из себя ветрину с пагинацией и активными кнопками с помощью которых можно можно выбирать определенный вид напитка и его производителя
![ActiveButtuns](documentation/pictures/TypeBrandsButtons.JPG)

### Страница Администратора:

![AdminPage](documentation/pictures/AdminPageScreen.JPG)
Страница администратора представлена в виде набора кнопок с модальными окнами через которые можно управлять добавлением/изменением существующих напитков/их видов/производителей
![ModalWindow](documentation/pictures/ModalWindowScreen.JPG)

### Страница логина/регистрации:

![LoginPage](documentation/pictures/LoginPageScreen.JPG)

На данном этапе реализована базовая версия входа/регистрации с хэшированием пороля. В дальнейшем планируется добавить аутентификацию через Google/Facebook/Vk и пр.

---

## Карта развития:

1. :white_large_square: Сделать мобильную версию сайта
2. :white_large_square: Улучшить визуальную составляющую сайта
3. :white_large_square: Сделать современную форму решистрации через Google и соцсети
4. :white_large_square: Создать раздел Избранное(basket)
5. :white_large_square: Создать систему отзывов
6. :white_large_square: Создать профиль пользователя с отображением его предпочтений/отзывов оставленных на сайте

---
