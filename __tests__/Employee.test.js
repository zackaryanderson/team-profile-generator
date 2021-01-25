const Employee = require('../lib/Employee');

test('creates an array with the employees information', () => {
    const employee = new Employee('name','email','id');

    expect(employee.name).toStrictEqual(expect.any(String));
    expect(employee.email).toStrictEqual(expect.any(String));
    expect(employee.id).toStrictEqual(expect.any(String));
    expect(employee.role).toBe('Employee');
});