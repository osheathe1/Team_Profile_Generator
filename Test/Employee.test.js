const { TestScheduler } = require('jest');
const Employee = require('../Lib/Employee');
test("Can create Employee class", function () {
    const e = new Employee()
    expect(typeof e).toBe("object")
});

test("Can set name via constructor", function () {
    const name = 'Jay';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor", function () {
    const id = 100;
    const e = new Employee('Jay', id);
    expect(e.id).toBe(100);
});

test("Can set a email via constructor", function () {
    const email = 'jay@blue.com';
    const e = new Employee("Jay", 100, email);
    expect(e.email).toBe(email);
});

test(" Test the get name method.", function (){
    const getName = 'Jay';
    const e = new Employee(getName);
    expect(e.getName()).toBe(getName);
})

