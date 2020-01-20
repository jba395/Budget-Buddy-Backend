var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'postgres',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'HPdude22$$',
    database : 'budgetbuddytest'
  }
});

const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings

// test route
router.get('/', (req, res) => {
  res.send('The home page works!');
})

// log in to an existing account
router.post('/login', (req, res) => {
  let response = {
    user: req.body.username,
    pass: req.body.password
  }
  console.log(response);
  res.json(response);
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
