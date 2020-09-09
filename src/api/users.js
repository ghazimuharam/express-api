const express = require('express');

const db = require('monk')(process.env.MONGO_URI);

const users = db.get('users');

const router = express.Router();

router.get('/', async (req, res) => {
  users.find({}).then((allUser) => {
    const data = {
      message: 'All user data',
      result: {
        data: allUser
      }
    };
    res.json(data);
  });
});

router.get('/get/:user', async (req, res) => {
  users.findOne({ name: req.params.user }, {
    collation: {
      locale: 'en',
      strength: 2
    }
  }).then((match) => {
    if (match) {
      res.json({ data: match });
    } else {
      res.json({ data: 'User not found' });
    }
  });
});

module.exports = router;
