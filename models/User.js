const { Schema, model } = require('mongoose');


const User = new Schema({  //? Схема будет описывать то, как наш пользователь будет храниться в базе данных
   username: { type: String, unique: true, required: true },
   password: { type: String, required: true },
   roles: [{ type: String, ref: 'Role' }] //? Добавляем ссылку на сущность роли из Roles.js
})

module.exports = model('User', User)