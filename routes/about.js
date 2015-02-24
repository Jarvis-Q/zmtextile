var express = require('express');
var router = express.Router();

var jadeVar = {
  title: '中迈纺织 - 工装面料供应商',
  meta: {
    name: 'description',
    content: '中迈纺织 - 中国浙江绍兴纺织品，柯桥轻纺城，工作服面料|工装面料|制服面料|迷彩印花|衬衫面料，优质纺织品供应商'
  },
  miniLogo: true,
  routePage: 'about'
};
router.get('/about', function(req, res) {
  res.render('about/introduction', jadeVar);
});

router.get('/about/:name', function(req, res) {
  res.render('about/' + req.params.name, jadeVar);
});

module.exports = router;