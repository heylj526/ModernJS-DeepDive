# 객체 리터럴

## 객체
> 자바스크립트를 구성하는 거의 모든 것이 객체. 원시값을 제외한 나머지(함수, 배열)

```
const person = {
    name: 'Jang',
    job: 'developer'
};
```
name과 job은 프로퍼티 키, 'Jang'과 'developer'는 프로퍼티 값이다.   
프로퍼티는 키와 값으로 이루어져 있다.   
   

```
const cat = {
    age: 5,
    crying: function() {
        console.log("야옹");
    }
};
```
프로퍼티의 값이 함수일 경우 메서드라고 부른다.

* 프로퍼티 : 객체의 상태를 나타내는 값
* 메서드 : 프로퍼티를 조작하거나 참조하는 동작

-----

## 객체 생성하는 방법
클래스 기반 객체지향 언어(C++, 자바)   
1. 클래스 정의
2. new 연산자로 생성자 호출
```
  public class Person { // 클래스 정의
    private String name;
    private String job;

    public Person(name, job) {
      this.name = name;
      this.job = job;
    }
  }

  ...

  // 생성자 호출로 객체 생성
  Person person = new Person("Jang", "developer"); 
```

프로토타입 기반 객체지향 언어(자바스크립트)
* 객체 리터럴(중괄호{} 안에 프로퍼티 정의하는 방법)
  ```
  const person = {
    name: 'Jang',
    job: 'developer'
  };
  ```
* Object 생성자 함수
* 생성자 함수
* Object.create 메서드
* 클래스(ES6)

위에서 봤듯이 가장 간편한 생성 방법은 객체 리터럴이다.   
나머지는 함수 이후 정리!

장점
1. 클래스를 먼저 정의하고 생성자를 호출할 필요없이 리터럴로 객체 생성가능
2. 객체 생성 후 동적으로 프로퍼티 추가, 삭제 가능

-----

## 프로퍼티
>프로퍼티 키는 프로퍼티 값에 접근할 수 있는 식별자   

일반적으로 문자열을 사용하고, 반드시 식별자 네이밍 규칙을 따라야 하는 것은 아니지만 번거로운 일이 발생할 수 있으니 규칙을 따를 것을 권장한다.

1. 식별자 네이밍 규칙을 따르지 않은 프로퍼티 키는 따옴표("",'')를 생략할 수 없다.
  ```
  const person = {
    name: 'Jang',
    'address-detail': 'XXX번지 XXX호'
  };
  ```
2. 문자열로 프로퍼티 키를 동적 생성할 수 있다.
  ```
  const person = {};
  const key = 'name';
  person[key] = 'Jang'; // ES5

  const person2 = {[key]: 'ChulSu'}; // ES6
  ```
3. 빈 문자열을 프로퍼티 키로 사용할 수 있지만 권장하지 않는다.
  ```
  const obj = {'': 'empty'};
  ```
4. 프로퍼티 키에 문자열이나 심벌값 이외의 값은 암묵적 타입 변환으로 문자열로 변환된다.
  ```
  const obj = {0: 0};
  ```
5. 프로퍼티 키를 예약어로 사용해도 에러가 발생하지는 않지만 권장하지 않는다.
6. 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 덮어쓴다. 에러는 발생하지 않는다.

>식별자 네이밍 규칙
>* 식별자는 특수문자를 제외한 문자, 숫자, 언더스코어(_), 달러기호($) 포함 가능
>* 숫자로 시작 불가
>* 예약어를 식별자로 사용불가(do, finally, const ...)

-----

## 프로퍼티 접근
* 마침표 표기법
* 대괄호 표기법

```
const person = {
  name: 'Jang'
};
console.log(person.name); // Jang
console.log(person['name']); // Jang
```
식별자 네이밍 규칙에 맞지 않은 프로퍼티 키를 사용하면 대괄호 표기법을 사용해야 한다.

## 프로퍼티 값 갱신
> 이미 존재하는 프로퍼티 값에 할당하면 갱신된다.

## 프로퍼티 동적 생성
> 존재하지 않는 프로퍼티 값에 할당하면 새로 생성된다.

## 프로퍼티 삭제
> delete 연산자로 프로퍼티 값을 삭제한다.
```
const person = {
  name: 'Jang'
};
delete person.name;
```

## ES6에 추가된 객체 리터럴 기능
1. 프로퍼티 축약 표현   
프로퍼티 값을 변수로 사용할 때 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키 생략 가능
```
const name = 'Jang';
const job = 'developer';

// ES5
const person = {
    name: name,
    job: job
};

// ES6
const person2 = {
  name, job
};
```

2. 계산된 프로퍼티 이름
```
const obj = {};
let i = 0;

// ES5
obj[++i] = i;
obj[++i] = i;
obj[++i] = i;
// obj: {1: 1, 2: 2, 3: 3}

// ES6
const obj2 = {
    [++i]: i,
    [++i]: i,
    [++i]: i
};
// obj2: {4: 4, 5: 5, 6: 6}
```

3. 메서드 축약 표현
```
const cat = {
    age: 5,
    crying: function() { // ES5
        console.log("야옹");
    }
};

const dog = {
    age: 5,
    crying() { // ES6
        console.log("멍멍");
    }
};

```
메서드 축약 표현으로 정의한 메서드는 프로퍼티에 할당한 함수와 다르게 동작한다. 이후 ***메서드*** 파트에서 알아보자.