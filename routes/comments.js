const express = require('express');
const router = express.Router();
router.get('/', function(req, res, next) {
  res.render('comments', { title: 'User Comments' });
});

module.exports = router;