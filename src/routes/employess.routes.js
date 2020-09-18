const { Router } = require('express');
const employeesCtr = require('../controllers/employees.controller');
const router = Router();

const employessCtr = require('../controllers/employees.controller');

router.get('/', employeesCtr.getEmployees);

router.post('/', employeesCtr.createEmployee);

router.get('/:id', employeesCtr.getEmployee);

router.put('/:id', employeesCtr.getEmployees);

router.delete('/:id', employeesCtr.getEmployees);

module.exports = router;