// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "딱지",
    color : "gray",
}

let type = animal.type;
console.log(type);

animal.age = 1; // 추가
animal.name = "딱지이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티

const person = {
    name : "장원지",
    // 메서드
    sayHi : function () {
        console.log("안녕!")
    },
    sayHi : () => {
        console.log("안녕!")
    },
    sayHi() {
        console.log("안녕!")
    },
}

person.sayHi();