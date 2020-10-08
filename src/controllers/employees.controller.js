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
    if (employee != null) {
        res.json(employee);
    }else{
        res.json({message: 'Employee id dont exists'});
    }
    
};

employeesCtr.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const employee = await Employee.findById(id);
    if (employee != null) {
        const updateEmployee = await Employee.findByIdAndUpdate(id, data, {
            new: true
        });
        res.json({message: 'Employee Update', updateEmployee});
    }else{
        res.json({message: 'Employee id dont exists'});
    }

};

employeesCtr.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.json({message: 'Employee Delete'});
};

module.exports = employeesCtr;