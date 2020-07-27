const routes = require('express').Router()
const { User } = require("./app/models")
// definição de rotas
User.create({
    name: "Italo",
    email: "italo.guglielmini@gmail.com",
    password_hash: "17a105314a"
});

module.exports = routes;