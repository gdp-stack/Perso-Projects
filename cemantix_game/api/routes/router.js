
const express = require('express');
const router = express.Router();
const { secretWords } = require('../data/words.json');

router.post('/', (req, res) => {
  const { word } = req.body;
  let response = { result: 'Not found', temperature: '0%' };

  for (const [secret, ranges] of Object.entries(secretWords)) {
    for (const [range, words] of Object.entries(ranges)) {
      if (words.includes(word)) {
        response = { result: secret, temperature: range };
        break;
      }
    }
  }

  res.json(response);
});

module.exports = router;
