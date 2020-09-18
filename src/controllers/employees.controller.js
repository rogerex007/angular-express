const employeesCtr = {};

employeesCtr.getEmployees = (req, res) => {
    res.send('Get employees');
};

employeesCtr.createEmployee = (req, res) => {
    res.send('Create employees');
};

employeesCtr.getEmployee = (req, res) => {
    res.send('Get employee');
};

employeesCtr.updateEmployee = (req, res) => {
    res.send('Update employees');
};

employeesCtr.deleteEmployee = (req, res) => {
    res.send('Delete employees');
};

module.exports = employeesCtr;