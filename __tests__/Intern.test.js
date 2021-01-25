const Intern = require('../lib/Intern');

test('creates an array with the engineer information', () => {
    const intern = new Intern('name','id','email','school');

    expect(intern.name).toStrictEqual(expect.any(String));
    expect(intern.id).toStrictEqual(expect.any(String));
    expect(intern.email).toStrictEqual(expect.any(String));
    expect(intern.school).toStrictEqual(expect.any(String));
    expect(intern.role).toBe('Intern');
});