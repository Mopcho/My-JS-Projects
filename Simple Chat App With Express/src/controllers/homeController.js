const router = require('express').Router();

router.get('/home', (req,res)=> {
    res.render('index');
});

exports.homeController = router;