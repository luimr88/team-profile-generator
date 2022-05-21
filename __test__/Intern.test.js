const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('Peter', '1', 'peter@gmail.com', 'University of Utah');
    expect(intern.name).toBe('Peter');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('peter@gmail.com');
    expect(intern.school).toBe('University of Utah');
});

test('gets interns name using getName method', () => {
    const intern = new Intern('Peter', '1', 'peter@gmail.com', 'University of Utah');
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test('gets interns id using getId method', () => {
    const intern = new Intern('Peter', '1', 'peter@gmail.com', 'University of Utah');
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id));
});

test('gets interns email using getEmail method', () => {
    const intern = new Intern('Peter', '1', 'peter@gmail.com', 'University of Utah');
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test('gets interns school using getSchool method', () => {
    const intern = new Intern('Peter', '1', 'peter@gmail.com', 'University of Utah');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test('checks role of employee', () => {
    const intern = new Intern('Peter', '1', 'peter@gmail.com', 'University of Utah');
    expect(intern.getRole()).toBe('Intern');
});