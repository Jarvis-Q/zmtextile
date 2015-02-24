var express = require('express');
var router = express.Router();
var swig  = require('swig');

/* GET home page. */
router.get(/^\/$|\/index/, function(req, res) {
    res.render('index', {
        title: '中迈纺织',
        meta: {
            name: 'description',
            content: '中迈纺织 - 中国浙江绍兴纺织品，柯桥轻纺城，工作服面料|工装面料|制服面料|迷彩印花|衬衫面料，优质纺织品供应商'
        },
        routePage: 'index',
        miniLogo: true
    });
    // res.send('Hello World');
});

module.exports = router;
