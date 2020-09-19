const { Router } = require('express');
const employeesCtr = require('../controllers/employees.controller');
const router = Router();

const employessCtr = require('../controllers/employees.controller');

router.get('/', employeesCtr.getEmployees);

router.post('/', employeesCtr.createEmployee);

router.get('/:id', employeesCtr.getEmployee);

router.put('/:id', employeesCtr.updateEmployee);

router.delete('/:id', employeesCtr.deleteEmployee);

module.exports = router;