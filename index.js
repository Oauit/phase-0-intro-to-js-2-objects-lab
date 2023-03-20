
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}

console.log(employee);

const newEmployee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

console.log(newEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee) {
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
    return employee;
}

console.log(employee);

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
delete newEmployee.name;

function destructivelyDeleteFromEmployeeByKey (employee, key, value) {
    delete employee[key]
    return employee
}

