import { sum } from '../lib/toBe';

test('sum 함수는 두 숫자를 더해야 한다11', () => {
  expect(sum(1, 2)).toBe(3);
});