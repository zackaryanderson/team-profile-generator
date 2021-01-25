const Engineer = require('../lib/Engineer');

test('creates an array with the engineer information', () => {
    const engineer = new Engineer('name','id','email','github');

    expect(engineer.name).toStrictEqual(expect.any(String));
    expect(engineer.id).toStrictEqual(expect.any(String));
    expect(engineer.email).toStrictEqual(expect.any(String));
    expect(engineer.github).toStrictEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');
});