// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [
    1,2,3,true,"hello",null,undefined,() => {},{},[]
];

console.log(arrC);

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

console.log(item1, item2);

arrC[0] = "hi";
console.log(arrC)

// 내가 구현해보고싶었던 것
// arrC에 있는 배열값을 각각의 변수에 담아보고싶었다.

for( let i = 0; i < arrC.length; i++){
    arrC[`item${i + 1}`] = arrC[i];
}

console.log(arrC.item3);
console.log(arrC)