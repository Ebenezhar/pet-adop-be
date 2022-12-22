const express = require('express');
const { postpetdata } = require('../Controllers/posts');
const { readDogs } = require('../Controllers/reads');
const router = express.Router();



router.post('/postpetdata', postpetdata);
router.get('/readpets/:type', readDogs);
module.exports = router;