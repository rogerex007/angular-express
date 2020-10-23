const {Router} = require('express');
const userCtr = require('../controllers/user.controller');
const {authJwt, verifySignup} = require('../middlewares');

const router = Router();


router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted], userCtr.createUser);


module.exports = router;