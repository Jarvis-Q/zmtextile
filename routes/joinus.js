var express = require('express');
var router = express.Router();

/**
 * Merge: 提供对象合并方法
 * @param {object} def 被覆盖对象
 * @param {object} option 属性来源对象
 * @param {boolean} override 是否深度覆盖
 */
function Merge(def, option, override) {
  for (var prop in option) {
    if (option.hasOwnProperty(prop) && (!def.hasOwnProperty(prop) || override)) {
      def[prop] = option[prop]
    }
  }
  return def;
}
var jadeVar = {
  title: '中迈纺织欢迎您',
  meta: {
    name: 'description',
    content: '中迈纺织 - 中国浙江绍兴纺织品，柯桥轻纺城，工作服面料|工装面料|制服面料|迷彩印花|衬衫面料，优质纺织品供应商'
  },
  miniLogo: true,
  routePage: 'join'
}

router.get('/join', function(req, res) {
  res.render('join/team', jadeVar);
});

router.get('/join/:name', function(req, res) {
  res.render('join/' + req.params.name, jadeVar);
});

module.exports = router;