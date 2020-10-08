const { Router } = require('express');
const employeesCtr = require('../controllers/employees.controller');
const router = Router();

const employessCtr = require('../controllers/employees.controller');
const { authJwt } = require('../middlewares');



router.get('/', employeesCtr.getEmployees);

router.post('/', [authJwt.verifyToken, authJwt.isModerator], employeesCtr.createEmployee);

router.get('/:id', employeesCtr.getEmployee);

router.put('/:id', [authJwt.verifyToken, authJwt.isAdmin], employeesCtr.updateEmployee);

router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], employeesCtr.deleteEmployee);

module.exports = router;