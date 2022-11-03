import operate from '../logic/operate';

test('adds 1 + 2 to equal 3', () => {
  expect(operate(1, 2, '+')).toBe('3');
});

test('Subtructs 1 - 2 to equal 5', () => {
  expect(operate(1, 2, '-')).toEqual('-1');
});

test('Multiply 2 x 2 to equal 4', () => {
  expect(operate(2, 2, 'x')).toEqual('4');
});

test('divide by zero 3 ÷ 0', () => {
  expect(operate(3, 0, '÷')).toEqual('Can\'t divide by 0.');
});

test('divide 6 ÷ 2', () => {
  expect(operate(6, 2, '÷')).toEqual('3');
});

test('modulo 7 % 2', () => {
  expect(operate(7, 2, '%')).toEqual('1');
});

test('invalid operator', () => {
  expect(() => (operate(15, 5, '@')).toThrow(Error));
});
