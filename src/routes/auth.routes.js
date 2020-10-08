const { Router } = require('express');
const router = Router();

const authCtr = require('../controllers/auth.controller');

router.post('/signup', authCtr.singnup);
router.post('/signin', authCtr.singnin);


module.exports = router;