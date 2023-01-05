var f = function add(x, y) {
  return x + y;
}

console.log(typeof f);
console.log(f);

var a = function(x, y) {
  return x - y;
}
console.log(a(5,3));

(function bar() {
  console.log('bar');
});

function sub(x, y) {
  return x - y;
}
console.log(sub); // 자바스크립트가 암묵적으로 생성한 식별자

function add(x, y) {// x = 1, y = 2
  console.log(arguments);
  return x + y;
}
console.log(add(1, 2, 3));

//return; //nodejs에서는 파일 스코프를 갖기 때문에 함수 안에 사용해야 하는 return을 호출해도 에러가 안난다.

//deep copy
function mutateDeepObject(obj) {
  obj.a.thing = true;
}
const obj = {a: {thing: false}};
const copy = JSON.parse(JSON.stringify(obj));
mutateDeepObject(copy);
console.log("result: ", obj.a.thing);


function deepCopyChange(obj) {
  obj = JSON.parse(JSON.stringify(obj));
  obj.a.thing = true;
}
const obj2 = {a: {thing: false}};
deepCopyChange(obj2);
console.log(obj2.a.thing);

var add = function(x, y) {
  return x + y;
};
console.log((add)(1, 2));

(function(x, y) {
  console.log(x * y);
}(2, 3));

(function(x, y) {
  console.log(x * y);
})(4, 5);

!function(x, y) {
  console.log(x * y);
}(5, 6);

+function(x, y) {
  console.log(x * y);
}(6, 7);


function factorial(n) {
  if(n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));


var a = function(str){
  console.log(`${str}님 안녕하세요!`);
};

var b = function(f){
  f('홍길동');
};

b(a);


var count = 0;

function increase(n) {
  return ++n;
}

function decrease() {
  --count;
}

count = increase(count);
console.log(count);
decrease();
console.log(count);