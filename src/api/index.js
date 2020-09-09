const express = require('express');

const users = require('./users');

const router = express.Router();

router.use('/users', users);

router.get('/', (req, res) => {
  res.json({
    message: 'API'
  });
});

module.exports = router;
