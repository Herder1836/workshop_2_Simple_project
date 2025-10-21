import { add, capitalize, formatNumber, groupBy } from './index.js';
import type { User } from './index.js';

const users: User[] = [
  { id: 1, name: 'Andrii', age: 22, city: 'Odesa' },
  { id: 2, name: 'Maria', age: 25, city: 'Lviv' },
  { id: 3, name: 'Ivan', age: 22, city: 'Odesa' },
];

console.log('sum(typed):', add(2, 3));
console.log('capitalize(typed):', capitalize('hello'));
console.log('format(ok):', formatNumber(123.456, { precision: 2 }));

const groupedByCity = groupBy(users, 'city');
console.log('groupByCity:', groupedByCity);
