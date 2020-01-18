var express = require('express');
var router = express.Router();

// test route
router.get('/', (req, res) => {
  res.send('The home page works!');
})

// register an account
router.post('/register', (req, res) => {
  knex('users')
  .insert(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password
    }
  )
  .then( () => {
    res.send(`Account created! Welcome, ${req.body.firstName}`)
  })
})

module.exports = router;
