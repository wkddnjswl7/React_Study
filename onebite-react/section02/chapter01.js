//1. Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// fn 들의 변수는 거짓이므로 ! 을 만나면 참이 되니 콘솔이 출력됨
// if(!f1){
//     console.log("fasly")
// } 
// if(!f2){
//     console.log("fasly")
// }
// if(!f3){
//     console.log("fasly")
// }
// if(!f4){
//     console.log("fasly")
// }
// if(!f5){
//     console.log("fasly")
// }
// if(!f6){
//     console.log("fasly")
// }
// if(!f7){
//     console.log("fasly")
// }

// 2. truthy 한 값 : 7가지 Falsy한 값들을 제외한 나머지 모든 값
// let t1 = "hello";
// let t2 = 123;
// let t3 = [];
// let t4 = {};
// let t5 = () => {};

// if(t1){
//     console.log("truthy");
// }
// if(t2){
//     console.log("truthy");
// }
// if(t3){
//     console.log("truthy");
// }
// if(t4){
//     console.log("truthy");
// }
// if(t5){
//     console.log("truthy");
// }

// 3. 활용 사례 : undefined
// 보통 조건문으로 이 Person 매개변수의 값이 Null이거나 undefined이 아님을 먼저 확인
// function printName(person){
//     if(person === undefined || person === null){    // undefined이거나 Null일 경우 출력될 수 있도록 조건을 2개를 건다
//        console.log("person의 값이 없음");
//        return;   // 거짓일 경우 console.log(person.name);를 수행하지 않고 함수를 빠져나간다.
//     }
//     console.log(person.name);
// }

// let person = { name : "장원지"};
// printName(person);

// 위의 코드를 개선
function printName(person){
    if(!person){// falsy한 값일 경우에만 수행
       console.log("person의 값이 없음");
       return;
    }
    // truthy한 값일 경우에만 수행
    console.log(person.name);
}

let person = undefined;
printName(person);