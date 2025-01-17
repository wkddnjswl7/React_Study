// 스코프
// 전역 스코프 : 전체 연역
// -> 전체 영역에서 접근 가능
// 지역 스코프 : 특정 영역
// -> 특정 영역에서만 접근 가능 

let a = 1; // 전역 스코프

function funcA(){
    let b = 2; // 지역 스코프
    console.log(a);
}

funcA();
console.log(b);

if(true){
    let c = 1;
}