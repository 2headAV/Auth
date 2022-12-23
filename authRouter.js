const Router = require('express');
const router = new Router()  //? Теперь мы можем слушать запросы GET POST DELETE
const controller = require('./authController');
const { check } = require('express-validator');
const authMiddleware = require('./middleware/authMiddleware');
const roleMiddleware = require('./middleware/roleMiddleware');
//? У нас будет 2 запроса Первый запрос на регистрацию, второй на заход

router.post('/registration', [
   check('username', "Имя пользователя не может быть пустым").notEmpty(),
   check('password', "Пароль должен быть больше 4-х и меньше 10-ти символов").isLength({ min: 4, max: 10 })
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['ADMIN']), controller.getUser) //? Эксперемент где будем подключать разные доступы Админ Пользователь и Т.Д

module.exports = router;

