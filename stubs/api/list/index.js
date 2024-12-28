const router = require('express').Router();

module.exports = router;

const data = require('./data/list.json');
// const keycloak = require('../keycloak');

// router.get('/', keycloak.protect(), (req, res) => {
router.get('/', (req, res) => {
  res.send(data);
  res.status(500).send({
    message: 'Internal server error'
  });
});