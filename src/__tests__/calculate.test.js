import calculate from '../logic/calculate';

test('to test the Addition button', () => {
  const container = {
    total: '5',
    next: '1',
    operation: '+',
  };
  const result = calculate(container, '=');
  expect(result).toEqual({ total: '6', next: null, operation: null });
});

test('to test the subtruction button', () => {
  const container = {
    total: '28',
    next: '8',
    operation: '-',
  };
  const result = calculate(container, '=');
  expect(result).toEqual({ total: '20', next: null, operation: null });
});

test('check clear or AC button', () => {
  const container = {
    total: null,
    next: null,
    operation: null,
  };

  const result = calculate({ total: '16' }, 'AC');
  expect(result).toEqual(container);
});
