const Manager = require('../lib/Manager');

test('creates an array with the engineer information', () => {
    const manager = new Manager('name','id','email','school');

    expect(manager.name).toStrictEqual(expect.any(String));
    expect(manager.id).toStrictEqual(expect.any(String));
    expect(manager.email).toStrictEqual(expect.any(String));
    expect(manager.officeNumber).toStrictEqual(expect.any(String));
    expect(manager.role).toBe('Manager');
});