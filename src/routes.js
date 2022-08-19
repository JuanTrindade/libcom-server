const router = require('express').Router();

const ProfileController = require('./controllers/profile.controller');

router.get('/', (req, res) => res.send({ message: 'ok' }));

router.post('/profiles', ProfileController.create);

module.exports = router;
