const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Peter', '1', 'peter@gmail.com', '10');
    expect(manager.name).toBe('Peter');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('peter@gmail.com');
    expect(manager.officeNumber).toBe('10');
});

test('gets managers name using getName method', () => {
    const manager = new Manager('Peter', '1', 'peter@gmail.com', '10');
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test('gets managers id using getId method', () => {
    const manager = new Manager('Peter', '1', 'peter@gmail.com', '10');
    expect(manager.getId()).toEqual(expect.stringContaining(manager.id));
});

test('gets managers email using getEmail method', () => {
    const manager = new Manager('Peter', '1', 'peter@gmail.com', '10');
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test('gets managers office number using getOfficeNumber method', () => {
    const manager = new Manager('Peter', '1', 'peter@gmail.com', '10');
    expect(manager.getOfficeNumber()).toBe('10');
});

test('checks role of employee', () => {
    const manager = new Manager('Peter', '1', 'peter@gmail.com', '10');
    expect(manager.getRole()).toBe('Manager');
});