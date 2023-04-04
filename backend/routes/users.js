const express = require('express');
const router = express.Router();

const paginator = require('../src/controller/users/paginator')
const details = require('../src/controller/users/details')
const repos = require('../src/controller/users/repos')

router
  .route('/api/users')
  .get(paginator)

router
  .route('/api/users/:username/details')
  .get(details)

router  
  .route('/api/users/:username/repos')
  .get(repos)

module.exports = router;
