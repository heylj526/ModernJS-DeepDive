console.log(typeof (1+''));
console.log(typeof (true+''));
console.log(typeof (null+''));
console.log(typeof (undefined+''));
console.log(typeof ({}+''));
console.log(typeof ([]+''));

console.log(1+'');
console.log(true+'');
console.log(null+'');
console.log(undefined+'');
console.log({}+'');
console.log([]+'');

console.log(2 - '1');     // 1
console.log(3 * '2');     // 6
console.log(6 / 'three'); // NaN

console.log(+'100');      // 100
console.log(+true);       // 1
console.log(+false);      // 0
console.log(+null);       // 0
console.log(+undefined);  // NaN

console.log(!!0);
console.log(!!1);
console.log(!!'');
console.log(!!'hello');
console.log(!!undefined);
console.log(!!null);

const person = {
  name: 'Lee',
};
person['name'] = person['name'] || 'Jang';
console.table(person);
console.log(person?.name);

let animal;
// console.log(animal.age);
console.log(animal?.age);

// const str = 'hello world';
const str = undefined;
let count = str?.length ?? 0;
console.log(count);