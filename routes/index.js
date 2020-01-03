var express = require('express');
var router = express.Router();

// test route
router.get('/', (req, res) => {
  res.send('The home page works!');
})

module.exports = router;
