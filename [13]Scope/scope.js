// var x = 1;

// if(x < 10) {
//   var x = 100;
// }

// console.log(x);


var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1