
const{add,subtract,multiply,divide} = require('./math')

test('add 2 + 3 to equal 5', () =>{ 
    expect(add(2, 3)).toBe(5); 
});


test('subtract 8-5 to get 3', () => {
    expect(subtract(8,5)) . toBe(3);
});

test('multiply 2*3 to get 6', () => {
expect(multiply (2,3)) .toBe (6);
});

test('divide 10/2 to get 5', () => {
expect(divide (10,2)) .toBe (5);
});






