const express = require('express');
const router = express.Router();

router.get ('/', (req, res) => {
    res.render('index', {title: 'dynamic title'})
})

router.get ('/services', (req, res) => {
    res.render('services', {titleServices: 'dynamic services title'})
})

module.exports = router;