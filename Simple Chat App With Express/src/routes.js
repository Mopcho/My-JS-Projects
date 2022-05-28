const { homeController } = require("./controllers/homeController");

const router = require('express').Router();

router.use('/' , homeController);

exports.router = router;