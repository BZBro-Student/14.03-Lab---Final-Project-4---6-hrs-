const express = require('express');
const router = express.Router();
router.get('/', function(req, res, next) {
  res.render('menu', { title: 'Food Menu' });
});

module.exports = router;