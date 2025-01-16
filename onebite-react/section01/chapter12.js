function funcA(){
    console.log("funcA");
}

let varA = funcA;
varA();

let varB = function (){ // 익명함수 
    console.log("funcB");
}
varB();

// 2. 화살표 함수
// let varC = () => {
//     return 1;
// };
let varC = (value) =>  {
    console.log(value);
    return value+1;
}

console.log(varC(10));