const router = require('express').Router();

const ProfileController = require('./controllers/profile.controller');

router.post('/profiles', ProfileController.create);

module.exports = router;
