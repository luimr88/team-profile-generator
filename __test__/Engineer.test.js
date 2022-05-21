const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Peter', '1', 'peter@gmail.com', 'github.com/peter');
    expect(engineer.name).toBe('Peter');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('peter@gmail.com');
    expect(engineer.github).toBe('github.com/peter');
});

test('gets engineers name using getName method', () => {
    const engineer = new Engineer('Peter', '1', 'peter@gmail.com', 'github.com/peter');
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test('gets engineers id using getId method', () => {
    const engineer = new Engineer('Peter', '1', 'peter@gmail.com', 'github.com/peter');
    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id));
});

test('gets engineers email using getEmail method', () => {
    const engineer = new Engineer('Peter', '1', 'peter@gmail.com', 'github.com/peter');
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test('gets engineers github link using the getGithub method', () => {
    const engineer = new Engineer('Peter', '1', 'peter@gmail.com', 'github.com/peter');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test('checks role of employee', () => {
    const engineer = new Engineer('Peter', '1', 'peter@gmail.com', 'github.com/peter');
    expect(engineer.getRole()).toBe('Engineer');
});