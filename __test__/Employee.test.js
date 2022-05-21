const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Peter', '1', 'peter@gmail.com');
    expect(employee.name).toBe('Peter');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('peter@gmail.com');
});

test('gets employee name using getName method', () => {
    const employee = new Employee('Peter', '1', 'peter@gmail.com');
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('gets employee name using getId method', () => {
    const employee = new Employee('Peter', '1', 'peter@gmail.com');
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test('gets employee name using getEmail method', () => {
    const employee = new Employee('Peter', '1', 'peter@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});