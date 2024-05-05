const express = require('express');
const {createShortUrl,getAllUrl, redirectUrl} = require('../controller/urlController');
const router = express.Router();

  
router.post('/shortUrls', createShortUrl)
router.get('/', getAllUrl)
router.get('/:shortUrl', redirectUrl)

module.exports = router;
