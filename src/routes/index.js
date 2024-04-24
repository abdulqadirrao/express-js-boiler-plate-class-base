var express = require('express');
var router = express.Router();
var AuthController = require("../app/controllers/auth-controller.js");

/* GET home page. */
router.post("/post-register", AuthController.register);
router.post("/login", AuthController.login)
module.exports = router;
