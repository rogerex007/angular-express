const employeesCtr = {};

const Employee = require('../models/Employee');

employeesCtr.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
};

employeesCtr.createEmployee = async (req, res) => {
    const data = req.body;
    const newEmployee = new Employee(data);
    await newEmployee.save()
    res.send({message: 'Employee Created', newEmployee});
};

employeesCtr.getEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee);
};

employeesCtr.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    await Employee.updateOne({_id: id}, data);
    res.json({message: 'Employee Update', data});
};

employeesCtr.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    await Employee.deleteOne({_id: id});
    res.json({message: 'Employee Delete'});
};

module.exports = employeesCtr;