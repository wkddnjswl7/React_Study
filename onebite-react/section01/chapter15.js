// 1. 객체 생성
let obj1 = new Object();    // 객체 생성자
let obj2 = {};              //객체 리터럴

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name : "장원지",
    age : 26,
    hobby : "게임하기",
    dream : "FE Developer",
}

// 3. 객체 프로퍼티 다루기
// 3-1. 특정 프로퍼티에 접근(접 표기법, 괄호 표기법)
let name = person.name;         // 점 표기법
let dream = person["dream"]     // 괄표 표기법
console.log(dream);

let property = "hobby";
let hobby = person[property];   //person["hobby"]
console.log(hobby);

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoritteFood"] = "떡볶이";

console.log(person.job)
console.log(person.favoritteFood)

// 3-3. 새로운 프로퍼티를 수정하는 방법
person.job = "Student";
person["favoritteFood"] = "파스타";

console.log(person.job)
console.log(person.favoritteFood)

// 3-4. person.job;
delete person["favoritteFood"];

console.log(person)

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result1)
console.log(result2)
