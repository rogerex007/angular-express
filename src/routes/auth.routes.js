const { Router } = require('express');
const router = Router();

const authCtr = require('../controllers/auth.controller');
const {verifySignup} = require('../middlewares')

router.post('/signup', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], authCtr.singnup);
router.post('/signin', authCtr.singnin);


module.exports = router;