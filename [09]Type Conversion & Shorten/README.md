# 타입 변환과 단축 평가

## 타입 변환
* 암묵적 타입 변환 / 타입 강제 변환 : 개발자 의도와 상관없이 자바스크립트 엔진이 암묵적으로 타입을 자동 변환
* 명시적 타입 변환 / 타입 캐스팅 : 개발자가 의도적으로 값이 타입을 변환

### 암묵적 타입 변환
> 표현식 평가 시 코드 문맥과 부합하지 않은 코드 ➡️ 에러 발생 ❌, 암묵적 타입 변환 ⭕️

#### ✔️ 문자열 타입으로 변환   
`+` 연산자 : 피연산자 중 하나가 문자열이면 문자열 연결 연산자로 동작. 피연산자 중 문자열이 아닌 피연산자를 문자열로 암묵적 타입 변환
```javascript
// Number
1 + ''  // "1"

// Boolean
true + '' // "true"

// null
null + '' // "null"

// undefined
undefined + '' // "undefined"

// Symbol
// 심볼 타입을 문자열로 변환할 수 없음

// Object
{} + '' // [object Object]
[] + '' // ""
```

#### ✔️ **숫자 타입으로 변환**   
산술 연산자(`-`, `*`, `/`, ...) : 산술 연산자의 피연산자는 문맥상으로 모두 숫자여야 하므로 숫자가 아닌 피연산자를 암묵적 타입 변환. 숫자로 변환할 수 없으면 NaN이 됨.
```javascript
2 - '1'     // 1
3 * '2'     // 6
6 / 'three' // NaN

+'100'      // 100
+true       // 1
+false      // 0
+null       // 0
+undefined  // NaN

0 < '1'     // true. 비교 연산자도 숫자를 비교하므로 '1'이 숫자로 변환
```

#### ✔️ **불리언 타입으로 변환**   
제어문 처럼 boolean 값이 필요한 상황에서 boolean 타입이 아닌 값을 Truthy, Falsy로 구분하여 true, false로 변환한다.   

  Falsy 값
  * false
  * undefined
  * null
  * 0
  * -0
  * NaN
  * ''(빈 문자열)

```javascript
!!0         // false
!!1         // true

!!''        // false
!!'hello'   // true

!!undefined // false
!!null      // false
```

-----

### 명시적 타입 변환
> * 표준 빌트인 생성자 함수(String, Number, Boolean)
> * 빌트인 메서드    
>💡***빌트인 객체***에서 자세히 알아보자
> * 암묵적 타입 변환 이용

#### ✔️ **문자열 타입으로 변환**
1. 표준 빌트인 생성자 함수`String`를 new 연산자 없이 호출
2. `Object.prototype.toString` 메서드 사용
3. 문자열 연결 연산자 이용

```javascript
String(1);          // "1"
String(true);       // "true"

(1).toString();     // "1"
(true).toString();  // "true"

1 + '';             // "1"
true + '';          // "true"
```

#### ✔️ **숫자 타입으로 변환**
1. 표준 빌트인 생성자 함수`Number`를 new 연산자 없이 호출
2. 문자열을 `parseInt()`, `parseFloat()` 함수 사용
3. `+` 단항 산술 연산자 이용
4. `*` 산술 연산자 이용

```javascript
Number('1');        // 1
Number(true);       // 1

parseInt('1');      // 1
parseFloat('3.14'); // 3.14

+'1';               // 1
+true;              // 1

'2' * 1             // 2
true * 1            // 1
```

#### ✔️ **불리언 타입으로 변환**
1. 표준 빌트인 생성자 함수(Boolean)를 new 연산자 없이 호출
2. `!!` 부정 논리 연산자 이용

```javascript
Boolean('');        // false
Boolean('hello');   // true
Boolean(0);         // false
Boolean(1);         // true

!!'';               // false
!!'hello';          // true
!!0;                // false
!!1;                // true
```

## 단축 평가
> 표현식 평가 중 결과가 확정인 경우 나머지 평가를 생략하는 것

* 논리 연산자 논리합`||`, 논리곱`&&` 으로 피연산자 평가
* 옵셔널 체이닝 연산자 `?.`
* null 병합 연산자 `??`

#### ✔️ 논리 연산자로 피연산자 평가
논리합`||`, 논리곱`&&` 는 피연산자 중 한쪽으로 평가됨
```javascript
'A' || 'B'    // 'A'
false || 'B'  // 'B'
'A' || false  // 'A'

'A' && 'B'    // 'B'
false && 'B'  // false
'A' && false  // false
```
   
if문 대체 가능
```javascript
const person = {
  name: 'Lee',
};
person['name'] = person['name'] || 'Jang';
// person객체에 name 프로퍼티 키가 없으면 'Jang'을 추가해라
```

#### ✔️ 옵셔널 체이닝 연산자
ES11(ECMAScript2020)에 도입   
객체가 `null`또는 `undefined`인지 확인하고, 프로퍼티 참조할 때 유용   
좌항피연산자`?.`우항프로퍼티
* 좌항피연산자가 `null`또는 `undefined`이면 `undefined`
* 아니면 우항프로퍼티참조
```javascript
const person = {
  name: 'Lee',
};
console.log(person?.name);  // 'Lee'

let animal;
// console.log(animal.age); // TypeError 발생!
console.log(animal?.age);   // undefined
```

#### ✔️ null 병합 연산자
ES11(ECMAScript2020)에 도입   
변수에 기본값 설정할 때 유용   
좌항피연산자`??`우항피연산자
* 좌항 피연산자가 `null` 또는 `undefined`이면 우항 피연산자 반환
* 아니면 좌항 피연산자 반환   
```javascript
// const str = 'hello world';
const str = undefined;
let count = str?.length ?? 0;
console.log(count); // hello world일때는 11, undefined일때는 0
```

📌논리연산자 `||` VS null 병합 연산자 `??` 의 차이   
||논리연산자 `\|\|`|null 병합 연산자 `??`|
|----|--|--|
|공통점|두 연산자 모두 좌항 피연산자가 의도하지 않은 값일 때 우항 피연산자를 반환시킬 수 있음||
|차이점|좌항 피연산자가 `Falsy`한 값일 때 우항 피연산자를 반환|좌항 피연산자가 `null`, `undefined` 일 때만 우항 피연산자를 반환|

