const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => res.render('home'));
router.get('/service', (req, res) => res.render('#service'));
// Welcome Page
router.get('/about', (req, res) => res.render('events'));
router.get('/contact', (req, res) => res.render('contact'));
router.get('/register', (req, res) => res.render('register'));
router.get('/login', (req, res) => res.render('login'));


module.exports = router;
